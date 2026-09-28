"""Build assets/geo-data.js for the China 3D terrain page.

Downloads the source datasets into tools/.cache on first run, then writes
assets/geo-data.js containing:
  dem   – ETOPO1-derived 10' grid, lon 70–140E, lat 3–55N (Int16 LE, base64, rows south→north)
  mask  – PNG at 2.5': R = province index (0 = outside China), G = lake, B = land
  prov  – province names in mask-index order
  lines – delta-encoded polylines (lon*100, lat*100)

Requires: numpy, netCDF4, shapely, pillow
    pip install numpy netCDF4 shapely pillow
    python3 tools/build_data.py
"""
import json, base64, io, os, pathlib, tarfile, urllib.request
import numpy as np, netCDF4
from PIL import Image, ImageDraw
from shapely.geometry import shape, Polygon, MultiPolygon, LineString, MultiLineString, box
from shapely.ops import unary_union, linemerge

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / 'tools' / '.cache'
OUT = ROOT / 'assets' / 'geo-data.js'
NE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/'
SOURCES = {
    'topo10.nc': 'https://github.com/fatiando-data/earth-topography-10arcmin/releases/download/v1/earth-topography-10arcmin.nc',
    'echarts-4.9.0.tgz': 'https://registry.npmjs.org/echarts/-/echarts-4.9.0.tgz',
    'ne_10m_rivers_lake_centerlines.geojson': NE + 'ne_10m_rivers_lake_centerlines.geojson',
    'ne_10m_lakes.geojson': NE + 'ne_10m_lakes.geojson',
    'ne_10m_admin_0_countries_chn.geojson': NE + 'ne_10m_admin_0_countries_chn.geojson',
    'ne_10m_admin_0_boundary_lines_land.geojson': NE + 'ne_10m_admin_0_boundary_lines_land.geojson',
    'ne_10m_admin_0_boundary_lines_maritime_indicator_chn.geojson': NE + 'ne_10m_admin_0_boundary_lines_maritime_indicator_chn.geojson',
}
CACHE.mkdir(parents=True, exist_ok=True)
for name, url in SOURCES.items():
    if not (CACHE / name).exists():
        print('downloading', name)
        urllib.request.urlretrieve(url, CACHE / name)
if not (CACHE / 'china.json').exists():
    with tarfile.open(CACHE / 'echarts-4.9.0.tgz') as tf:
        (CACHE / 'china.json').write_bytes(tf.extractfile('package/map/json/china.json').read())
os.chdir(CACHE)

LON0, LON1, LAT0, LAT1 = 70.0, 140.0, 3.0, 55.0
BBOX = box(LON0, LAT0, LON1, LAT1)

# ---------------- DEM ----------------
ds = netCDF4.Dataset('topo10.nc')
lon = ds['longitude'][:]; lat = ds['latitude'][:]
ci = np.where((lon >= LON0 - 1e-6) & (lon <= LON1 + 1e-6))[0]
ri = np.where((lat >= LAT0 - 1e-6) & (lat <= LAT1 + 1e-6))[0]
dem = np.asarray(ds['topography'][ri[0]:ri[-1] + 1, ci[0]:ci[-1] + 1]).astype('<i2')
ny, nx = dem.shape
print('DEM', dem.shape, dem.min(), dem.max())

# ---------------- echarts china.json decode ----------------
def decode_ring(coord, off, scale=1024):
    res = []; px, py = off
    for i in range(0, len(coord), 2):
        x = ord(coord[i]) - 64; y = ord(coord[i + 1]) - 64
        x = (x >> 1) ^ (-(x & 1)); y = (y >> 1) ^ (-(y & 1))
        x += px; y += py; px, py = x, y
        res.append((x / scale, y / scale))
    return res

cj = json.load(open('china.json', encoding='utf-8'))
provs = []
for f in cj['features']:
    g = f['geometry']; eo = g['encodeOffsets']
    if g['type'] == 'Polygon':
        rings = [decode_ring(c, eo[i]) for i, c in enumerate(g['coordinates'])]
        geom = Polygon(rings[0], rings[1:])
    else:
        polys = []
        for pi, poly in enumerate(g['coordinates']):
            rings = [decode_ring(c, eo[pi][i]) for i, c in enumerate(poly)]
            polys.append(Polygon(rings[0], rings[1:]))
        geom = MultiPolygon(polys)
    if not geom.is_valid: geom = geom.buffer(0)
    provs.append((f['properties']['name'], geom))
names = [p[0] for p in provs]
china = unary_union([g.buffer(0.004) for _, g in provs]).buffer(-0.004)
print('provinces', len(provs), 'china area', round(china.area, 1))

# ---------------- mask raster ----------------
RES = 24  # px per degree (2.5')
W, H = int((LON1 - LON0) * RES), int((LAT1 - LAT0) * RES)
def px(pt): return ((pt[0] - LON0) * RES, (LAT1 - pt[1]) * RES)
def polys_of(g):
    if isinstance(g, Polygon): return [g]
    if isinstance(g, MultiPolygon): return list(g.geoms)
    return [x for x in getattr(g, 'geoms', []) if isinstance(x, Polygon)]
def fill(draw, g, val, holes=True):
    for p in polys_of(g):
        if p.exterior.coords and len(p.exterior.coords) > 2:
            draw.polygon([px(c) for c in p.exterior.coords], fill=val)
        if holes:
            for h in p.interiors: draw.polygon([px(c) for c in h.coords], fill=0)

R = Image.new('L', (W, H), 0); dr = ImageDraw.Draw(R)
order = sorted(range(len(provs)), key=lambda i: provs[i][0] in ('北京', '天津', '香港', '澳门', '上海'))
for i in order: fill(dr, provs[i][1], i + 1)

G = Image.new('L', (W, H), 0); dg = ImageDraw.Draw(G)
lakes = json.load(open('ne_10m_lakes.geojson', encoding='utf-8'))
lake_polys = []
for f in lakes['features']:
    if f['geometry'] is None: continue
    s = shape(f['geometry'])
    if s.intersects(BBOX):
        fill(dg, s, 255); lake_polys.append(s)

B = Image.new('L', (W, H), 0); db = ImageDraw.Draw(B)
countries = json.load(open('ne_10m_admin_0_countries_chn.geojson', encoding='utf-8'))
cgeoms = []
for f in countries['features']:
    s = shape(f['geometry'])
    if not s.is_valid: s = s.buffer(0)
    if s.intersects(BBOX):
        cgeoms.append((f['properties'].get('ADM0_A3') or f['properties'].get('SOV_A3'), s))
        fill(db, s, 255)
fill(db, china, 255, holes=False)
for lp in lake_polys: fill(db, lp, 255, holes=False)  # lakes are inland, keep them "land" for sea logic
mask = Image.merge('RGB', (R, G, B))
buf = io.BytesIO(); mask.save(buf, 'PNG', optimize=True)
mask_uri = 'data:image/png;base64,' + base64.b64encode(buf.getvalue()).decode()
print('mask png KB', len(buf.getvalue()) // 1024)

# ---------------- lines ----------------
def lines_of(g):
    if g.is_empty: return []
    if isinstance(g, LineString): return [g]
    if isinstance(g, MultiLineString): return list(g.geoms)
    out = []
    for x in getattr(g, 'geoms', []): out += lines_of(x)
    return out

def enc(lines, tol, minlen=0.0):
    out = []
    for l in lines:
        l = l.simplify(tol, preserve_topology=False)
        if l.length < minlen or len(l.coords) < 2: continue
        pts = [(int(round(x * 100)), int(round(y * 100))) for x, y in l.coords]
        flat = [pts[0][0], pts[0][1]]
        for a, b in zip(pts, pts[1:]):
            dx, dy = b[0] - a[0], b[1] - a[1]
            if dx == 0 and dy == 0: continue
            flat += [dx, dy]
        if len(flat) >= 4: out.append(flat)
    return out

china_bd = []
for p in polys_of(china):
    china_bd.append(LineString(p.exterior.coords))
china_lines = enc(china_bd, 0.012, 0.15)

pb = unary_union([g.boundary for _, g in provs])
pb = pb.difference(china.boundary.buffer(0.05))
prov_lines = enc(lines_of(linemerge(lines_of(pb))), 0.012, 0.2)

land = json.load(open('ne_10m_admin_0_boundary_lines_land.geojson', encoding='utf-8'))
nb = unary_union([shape(f['geometry']) for f in land['features'] if shape(f['geometry']).intersects(BBOX)])
nb = nb.intersection(BBOX).difference(china.buffer(0.12))
nbr_lines = enc(lines_of(linemerge(lines_of(nb))), 0.015, 0.2)

dash = json.load(open('ne_10m_admin_0_boundary_lines_maritime_indicator_chn.geojson', encoding='utf-8'))
dash_lines = enc([shape(f['geometry']) for f in dash['features']], 0.005)

rv = json.load(open('ne_10m_rivers_lake_centerlines.geojson', encoding='utf-8'))
rclass = {1: [], 2: [], 3: []}
for f in rv['features']:
    if f['geometry'] is None: continue
    s = shape(f['geometry']).intersection(BBOX)
    if s.is_empty: continue
    sr = f['properties']['scalerank']
    c = 1 if sr <= 4 else (2 if sr <= 7 else 3)
    rclass[c] += lines_of(s)
river = {k: enc(lines_of(linemerge(v)), 0.02, 0.2) for k, v in rclass.items()}

LINES = dict(china=china_lines, prov=prov_lines, nbr=nbr_lines, dash=dash_lines,
             r1=river[1], r2=river[2], r3=river[3])
for k, v in LINES.items(): print(k, len(v), sum(len(x) for x in v) // 2)

js = 'window.GEO=' + json.dumps(dict(
    nx=nx, ny=ny, lon0=LON0, lon1=LON1, lat0=LAT0, lat1=LAT1,
    dem=base64.b64encode(dem.tobytes()).decode(),
    mask=mask_uri, prov=names, lines=LINES), ensure_ascii=False, separators=(',', ':')) + ';'
OUT.write_text(js, encoding='utf-8')
print(OUT.relative_to(ROOT), len(js.encode()) // 1024, 'KB')
