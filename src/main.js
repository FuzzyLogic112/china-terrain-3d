// 中国三维地势图 — 主程序（由 esbuild 打包为 assets/app.js）
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

/* ================= data & geometry helpers ================= */
const G = window.GEO;
const NX = G.nx, NY = G.ny, NV = NX * NY;
const LON0 = G.lon0, LON1 = G.lon1, LAT0 = G.lat0, LAT1 = G.lat1;
const DLON = (LON1 - LON0) / (NX - 1), DLAT = (LAT1 - LAT0) / (NY - 1);
const M2U = 1e-5;                      // metres -> scene units (1 unit = 100 km)
const D2R = Math.PI / 180;
const $ = id => document.getElementById(id);

const H = (() => { const b = atob(G.dem); const u = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
  return Float32Array.from(new Int16Array(u.buffer)); })();

// Albers equal-area conic, standard parallels 25N / 47N, central meridian 105E (sphere)
const RE = 63.71, P1 = 25 * D2R, P2 = 47 * D2R, L0 = 105 * D2R;
const AN = (Math.sin(P1) + Math.sin(P2)) / 2, AC = Math.cos(P1) ** 2 + 2 * AN * Math.sin(P1), RHO0 = RE / AN * Math.sqrt(AC);
function albers(lon, lat) { const rho = RE / AN * Math.sqrt(AC - 2 * AN * Math.sin(lat * D2R)); const th = AN * (lon * D2R - L0);
  return [rho * Math.sin(th), RHO0 - rho * Math.cos(th)]; }
const [CX, CY] = albers(104.5, 35);
function toXZ(lon, lat) { const p = albers(lon, lat); return [p[0] - CX, -(p[1] - CY)]; }
function fromXZ(x, z) { const X = x + CX, Yy = -z + CY, dy = RHO0 - Yy; const rho = Math.hypot(X, dy);
  const s = (AC - (rho * AN / RE) ** 2) / (2 * AN); if (s < -1 || s > 1) return null;
  return [(L0 + Math.atan2(X, dy) / AN) / D2R, Math.asin(s) / D2R]; }

const PROV_FULL = {台湾:'台湾省',河北:'河北省',山西:'山西省',内蒙古:'内蒙古自治区',辽宁:'辽宁省',吉林:'吉林省',黑龙江:'黑龙江省',江苏:'江苏省',浙江:'浙江省',安徽:'安徽省',福建:'福建省',江西:'江西省',山东:'山东省',河南:'河南省',湖北:'湖北省',湖南:'湖南省',广东:'广东省',广西:'广西壮族自治区',海南:'海南省',四川:'四川省',贵州:'贵州省',云南:'云南省',西藏:'西藏自治区',陕西:'陕西省',甘肃:'甘肃省',青海:'青海省',宁夏:'宁夏回族自治区',新疆:'新疆维吾尔自治区',北京:'北京市',天津:'天津市',上海:'上海市',重庆:'重庆市',香港:'香港特别行政区',澳门:'澳门特别行政区'};

function loadImage(src) { return new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src; }); }
function hexRGB(h) { h = h.trim().replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
const v3 = h => { const c = hexRGB(h); return new THREE.Vector3(c[0] / 255, c[1] / 255, c[2] / 255); };
const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

/* ================= colour schemes ================= */
const SCHEMES = {
  layered: { name: '分层设色', discrete: true,
    stops: [[-400,'#5F9F62'],[0,'#6DAC68'],[200,'#A6C97D'],[500,'#DFDB9B'],[1000,'#E3C27C'],[2000,'#CE9C5F'],[3000,'#B07A45'],[4000,'#8E5A35'],[5000,'#6A4535']] },
  natural: { name: '连续晕渲', discrete: false,
    stops: [[-400,'#4E8D58'],[0,'#5C9C5E'],[300,'#9CC17A'],[800,'#D7D495'],[1500,'#D8B679'],[2500,'#BE8E5D'],[3500,'#9F6F4F'],[4500,'#8A6A5C'],[5400,'#B8ADA8'],[6100,'#F3F1EE']] },
  gray: { name: '灰度', discrete: false, stops: [[-400,'#5A5A5A'],[0,'#666666'],[6100,'#F2F2F2']] },
};
const LUT_MIN = -400, LUT_MAX = 6400, LUT_N = 1024;
const WATER_SHALLOW = '#B9DCEC', WATER_DEEP = '#2A5D8C', LAKE = '#8EC3E0';
function colorAt(h, key = state.scheme) {
  const st = SCHEMES[key].stops;
  if (SCHEMES[key].discrete) { let c = st[0][1]; for (const s of st) if (h >= s[0]) c = s[1]; return hexRGB(c); }
  if (h <= st[0][0]) return hexRGB(st[0][1]);
  for (let i = 1; i < st.length; i++) if (h <= st[i][0]) {
    const t = (h - st[i - 1][0]) / (st[i][0] - st[i - 1][0]), a = hexRGB(st[i - 1][1]), b = hexRGB(st[i][1]);
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
  return hexRGB(st[st.length - 1][1]);
}
function waterAt(depth) { const t = Math.pow(Math.min(Math.max(depth / 6500, 0), 1), 0.5), a = hexRGB(WATER_SHALLOW), b = hexRGB(WATER_DEEP);
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
const rgbStr = c => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;

/* ================= state ================= */
const state = { exag: 22, scheme: 'layered', contour: 0, shade: 0.85, dim: true, bathy: false, sea: 0,
  layers: { admin: true, rivers: true, regions: true, mountains: true, seas: true, cities: false, steps: false, qinhuai: false, hu: false } };

/* ================= reference lines (teaching schematics) ================= */
const STEP12 = [[74.6,38.5],[76.2,38.0],[77.4,37.5],[78.5,37.2],[79.9,36.8],[81.5,36.6],[82.7,36.7],[84.3,37.0],[85.6,37.6],[86.5,37.9],[88.2,38.6],[90,39.0],[92,39.3],[94,39.7],[95.5,39.7],[97,39.6],[98.3,39.35],[99.5,38.9],[101,38.3],[102.4,37.5],[103.3,36.6],[103.6,35.5],[104,34.5],[104.5,33.3],[104.2,32.3],[103.6,31.3],[103,30.3],[102.6,29.3],[102.3,28.3],[101.9,27.3],[101.2,26.2],[100.3,25.3],[99.2,24.5],[98.6,24.1]];
const STEP23 = [[122.3,53.2],[121.9,51.8],[121.4,50.4],[120.8,49],[120.2,47.6],[119.4,46.3],[118.5,45],[117.6,43.8],[116.8,42.6],[116.1,41.5],[115.5,40.5],[115.1,39.7],[114.6,38.7],[114,37.7],[113.6,36.6],[113.3,35.6],[112.6,35],[111.8,34.2],[111.2,33.3],[110.6,32.2],[110.2,31.1],[110.3,30],[110.5,29],[110.7,28],[110.5,27],[110.2,26.2]];
const QINHUAI = [[104.6,34.2],[105.8,34.2],[107,34],[107.8,33.95],[109,33.9],[110.1,33.95],[111.2,33.7],[112.3,33.3],[113.2,32.6],[114.2,32.4],[115.3,32.45],[116.5,32.5],[117,32.65],[117.4,32.93],[118.2,33.1],[118.85,33.3],[119.5,33.6],[120.3,34]];
const HULINE = [[127.49,50.24],[98.49,25.02]];

/* ================= labels ================= */
const INFO = {
  '青藏高原':['高原','世界海拔最高的高原，号称“世界屋脊”，平均海拔 4000 m 以上，构成我国地势第一级阶梯。雪山连绵、冰川广布，是长江、黄河等大江大河的发源地。'],
  '内蒙古高原':['高原','我国第二大高原，海拔 1000–1500 m。地面坦荡、一望无际，多草原与沙漠。'],
  '黄土高原':['高原','世界上黄土分布面积最大的高原，海拔 1000–2000 m。地表千沟万壑、支离破碎，水土流失严重。'],
  '云贵高原':['高原','海拔 1000–2000 m，地形崎岖不平，石灰岩广布，喀斯特地貌典型，多山间小盆地（“坝子”）。'],
  '塔里木盆地':['盆地','我国面积最大的盆地，位于天山与昆仑山之间，中部的塔克拉玛干沙漠是我国面积最大的沙漠。'],
  '准噶尔盆地':['盆地','我国第二大盆地，位于天山与阿尔泰山之间，中部有古尔班通古特沙漠。'],
  '柴达木盆地':['盆地','我国海拔最高的大盆地（约 2600–3000 m），盐湖众多，矿产资源丰富，有“聚宝盆”之称。'],
  '四川盆地':['盆地','四周群山环绕，西部为成都平原。紫色土广布，称“紫色盆地”，自古有“天府之国”之称。'],
  '吐鲁番盆地':['盆地','我国陆地最低处所在，艾丁湖湖面约 −154 m。夏季酷热，有“火洲”之称。'],
  '东北平原':['平原','我国面积最大的平原，由三江平原、松嫩平原、辽河平原组成。黑土肥沃，是重要的商品粮基地。'],
  '华北平原':['平原','主要由黄河、海河、淮河泥沙冲积而成，地势坦荡，大部分海拔在 50 m 以下。'],
  '长江中下游平原':['平原','地势低平，河湖众多、水网密布，素有“鱼米之乡”之称。'],
  '东南丘陵':['丘陵','我国面积最大的丘陵，由江南丘陵、浙闽丘陵、两广丘陵组成，低山丘陵间多河谷盆地。'],
  '辽东丘陵':['丘陵','位于辽东半岛，海拔多在 500 m 以下。'],
  '山东丘陵':['丘陵','位于山东半岛与鲁中地区，泰山是其最高峰。'],
  '喜马拉雅山脉':['山脉','世界上海拔最高的山脉，东西绵延约 2400 km，平均海拔 6000 m 以上，主峰珠穆朗玛峰。'],
  '昆仑山脉':['山脉','西起帕米尔高原，东延至青海，是地势第一、二级阶梯分界的组成部分。'],
  '天山':['山脉','东西走向，横亘新疆中部，把新疆分为南疆（塔里木盆地）和北疆（准噶尔盆地）。'],
  '阿尔泰山':['山脉','位于新疆北部，西北—东南走向，是准噶尔盆地的北界。'],
  '祁连山':['山脉','位于青藏高原东北缘，西北—东南走向，冰雪融水滋养了河西走廊，是第一、二级阶梯分界的组成部分。'],
  '横断山脉':['山脉','南北走向，山高谷深、岭谷相间，怒江、澜沧江、金沙江在此“三江并流”，是第一、二级阶梯分界的组成部分。'],
  '秦岭':['山脉','东西走向，是我国南方与北方重要的地理分界线，也是长江与黄河水系的分水岭。'],
  '大兴安岭':['山脉','东北—西南走向，是第二、三级阶梯的分界，也是内蒙古高原与东北平原的分界。'],
  '太行山':['山脉','东北—西南走向，是第二、三级阶梯的分界，也是黄土高原与华北平原的分界。'],
  '巫山':['山脉','长江切穿巫山形成巫峡，是第二、三级阶梯分界的组成部分，也是四川盆地东缘的屏障。'],
  '雪峰山':['山脉','位于湖南中西部，东北—西南走向，是第二、三级阶梯分界的组成部分。'],
  '武夷山':['山脉','位于福建与江西交界，东北—西南走向。'],
  '南岭':['山脉','东西走向，是长江水系与珠江水系的分水岭。'],
  '阴山':['山脉','东西走向，位于内蒙古高原南缘。'],
  '贺兰山':['山脉','位于宁夏与内蒙古交界，阻挡了腾格里沙漠东移，是重要的自然地理界线。'],
  '长白山':['山脉','位于吉林东南部中朝边境，主峰白头山的天池是火山口湖。'],
  '台湾山脉':['山脉','纵贯台湾岛东部，主峰玉山海拔 3952 m，是我国东部最高峰。'],
  '珠穆朗玛峰':['山峰','世界最高峰，2020 年测定高程 8848.86 m，位于中国与尼泊尔边界。'],
  '乔戈里峰':['山峰','世界第二高峰，海拔 8611 m，位于喀喇昆仑山脉。'],
  '艾丁湖':['洼地','位于吐鲁番盆地，湖面约 −154 m，是我国陆地最低点。'],
};
const LINE_INFO = {
  steps:['地势','我国地势西高东低，呈三级阶梯状分布。第一级阶梯为青藏高原，平均海拔 4000 m 以上；第二级阶梯海拔多在 1000–2000 m，以高原、盆地为主；第三级阶梯海拔多在 500 m 以下，以平原、丘陵为主。一、二级分界：昆仑山—祁连山—横断山；二、三级分界：大兴安岭—太行山—巫山—雪峰山。'],
  qinhuai:['分界线','我国南方与北方的地理分界线，大致与 1 月 0 ℃ 等温线、800 mm 年等降水量线一致，也是亚热带与暖温带、湿润区与半湿润区的分界。'],
  hu:['人口地理','1935 年地理学家胡焕庸提出的黑河—腾冲线。当时此线东南约 36% 的国土居住着约 96% 的人口，这一格局至今基本稳定，与地形、降水的东西差异密切相关。'],
};
const LABELS = [];
function L(type, name, lon, lat, pri, extra = {}) { LABELS.push({ type, name, lon, lat, pri, ...extra }); }
[['青藏高原',86.5,33.4],['内蒙古高原',111.5,43.3],['黄土高原',108.2,37.0],['云贵高原',104.6,25.9],['塔里木盆地',83.2,39.6],['准噶尔盆地',86.6,45.4],
 ['柴达木盆地',94.6,37.3],['四川盆地',105.6,30.3],['东北平原',124.6,45.2],['华北平原',116.2,36.4],['长江中下游平原',115.8,30.4],['东南丘陵',115.6,26.4]]
  .forEach(r => L('region', r[0], r[1], r[2], 90, { layer: 'regions' }));
[['吐鲁番盆地',89.4,42.95],['辽东丘陵',122.8,40.45],['山东丘陵',118.9,36.1]].forEach(r => L('region', r[0], r[1], r[2], 70, { layer: 'regions', small: true }));
[['喜马拉雅山脉',84.8,28.7,82],['昆仑山脉',84.2,36.1,78],['天山',84.8,42.7,78],['阿尔泰山',88.6,47.6,74],['祁连山',98.6,38.6,76],['唐古拉山',91.8,32.9,70],['冈底斯山',82.8,31.2,66],
 ['喀喇昆仑山',77.0,35.6,64],['横断山脉',99.4,29.0,76],['秦岭',108.0,33.8,80],['大巴山',108.6,32.2,62],['大兴安岭',121.3,48.8,76],['小兴安岭',128.6,48.4,66],['长白山',128.0,42.1,68],
 ['太行山',113.6,37.1,76],['巫山',110.1,31.1,68],['雪峰山',110.6,27.3,66],['武夷山',117.6,27.3,66],['南岭',112.6,25.2,70],['阴山',110.0,41.3,66],['贺兰山',106.0,38.8,62],['台湾山脉',121.05,23.6,64]]
  .forEach(r => L('mtn', r[0], r[1], r[2], r[3], { layer: 'mountains' }));
L('peak', '珠穆朗玛峰', 86.925, 27.988, 99, { layer: 'mountains', val: '8848.86' });
L('peak', '乔戈里峰', 76.513, 35.881, 72, { layer: 'mountains', val: '8611' });
L('peak', '艾丁湖', 89.3, 42.63, 60, { layer: 'mountains', val: '−154', low: true });
[['渤海',119.8,38.9,86],['黄海',123.6,35.3,86],['东海',125.3,29.6,86],['南海',114.8,15.5,86],['太平洋',132.5,24.5,80]].forEach(r => L('sea', r[0], r[1], r[2], r[3], { layer: 'seas' }));
L('sea', '台湾海峡', 119.6, 24.4, 64, { layer: 'seas', small: true });
[['长江',112.3,30.25],['黄河',110.55,36.6],['珠江',112.6,23.2],['黑龙江',124.8,53.1],['雅鲁藏布江',88.8,29.15],['澜沧江',100.7,22.3],['怒江',98.85,26.0],['金沙江',101.8,26.4],
 ['塔里木河',84.8,41.05],['淮河',116.6,32.4],['松花江',129.2,46.5],['辽河',122.6,42.2]].forEach(r => L('river', r[0], r[1], r[2], r[0] === '长江' || r[0] === '黄河' ? 72 : 55, { layer: 'rivers' }));
[['青海湖',100.2,36.9],['鄱阳湖',116.3,29.05],['洞庭湖',112.9,29.25],['太湖',120.2,31.2],['纳木错',90.6,30.72],['呼伦湖',117.4,48.95],['洪泽湖',118.6,33.3]].forEach(r => L('lake', r[0], r[1], r[2], 45, { layer: 'rivers' }));
[['北京',116.40,39.90],['天津',117.20,39.13],['石家庄',114.51,38.04],['太原',112.55,37.87],['呼和浩特',111.75,40.84],['沈阳',123.43,41.80],['长春',125.32,43.82],['哈尔滨',126.53,45.80],
 ['上海',121.47,31.23],['南京',118.80,32.06],['杭州',120.16,30.27],['合肥',117.23,31.82],['福州',119.30,26.08],['南昌',115.86,28.68],['济南',117.12,36.65],['郑州',113.63,34.75],
 ['武汉',114.31,30.59],['长沙',112.94,28.23],['广州',113.26,23.13],['南宁',108.37,22.82],['海口',110.35,20.02],['重庆',106.55,29.56],['成都',104.07,30.57],['贵阳',106.63,26.65],
 ['昆明',102.83,24.88],['拉萨',91.13,29.65],['西安',108.94,34.34],['兰州',103.83,36.06],['西宁',101.78,36.62],['银川',106.23,38.49],['乌鲁木齐',87.62,43.83],['台北',121.56,25.04],
 ['香港',114.17,22.32],['澳门',113.54,22.19]].forEach(r => L('city', r[0], r[1], r[2], r[0] === '北京' ? 88 : 50, { layer: 'cities', cap: r[0] === '北京' }));
L('tag', '第一级阶梯', 91.5, 35.4, 97, { layer: 'steps', color: '#D9531E' });
L('tag', '第二级阶梯', 102.2, 40.6, 97, { layer: 'steps', color: '#D9531E' });
L('tag', '第三级阶梯', 117.8, 34.2, 97, { layer: 'steps', color: '#D9531E' });
L('tag', '秦岭—淮河线', 112.3, 32.75, 96, { layer: 'qinhuai', color: '#16875A' });
L('tag', '胡焕庸线', 118.8, 42.7, 96, { layer: 'hu', color: '#6A3FB5' });

/* ================= main ================= */
async function main() {
  // mask: R = province index, G = lake, B = land
  const maskImg = await loadImage(G.mask);
  const mc = document.createElement('canvas'); mc.width = maskImg.width; mc.height = maskImg.height;
  const mctx = mc.getContext('2d', { willReadFrequently: true }); mctx.drawImage(maskImg, 0, 0);
  const MASK = mctx.getImageData(0, 0, mc.width, mc.height).data, MW = mc.width, MH = mc.height, MRES = MW / (LON1 - LON0);
  function maskAt(lon, lat) { const x = Math.floor((lon - LON0) * MRES), y = Math.floor((LAT1 - lat) * MRES);
    if (x < 0 || y < 0 || x >= MW || y >= MH) return null; const k = (y * MW + x) * 4; return [MASK[k], MASK[k + 1], MASK[k + 2]]; }
  const SEAV = new Uint8Array(NV);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const m = maskAt(LON0 + i * DLON, LAT0 + j * DLAT) || [0, 0, 0]; SEAV[j * NX + i] = m[2] < 128 ? 1 : 0; }

  /* ---------- renderer / scene ---------- */
  const app = $('app');
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = 'gl';
  renderer.domElement.setAttribute('aria-label', '中国三维地形图，可拖动旋转与缩放');
  app.insertBefore(renderer.domElement, app.firstChild);
  const canvas = renderer.domElement;
  const scene = new THREE.Scene();
  let VW = Math.max(1, app.clientWidth), VH = Math.max(1, app.clientHeight);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.05, 2000);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.085; controls.screenSpacePanning = false;
  controls.maxPolarAngle = 1.48; controls.minDistance = 0.8; controls.maxDistance = 230;
  controls.zoomToCursor = true; controls.autoRotateSpeed = 0.55; controls.rotateSpeed = 0.7;

  /* ---------- terrain mesh ---------- */
  const PX = new Float32Array(NV), PZ = new Float32Array(NV);
  const pos = new Float32Array(NV * 3), nrm = new Float32Array(NV * 3), uvs = new Float32Array(NV * 2), wetA = new Float32Array(NV);
  const Y = new Float32Array(NV), WET = new Uint8Array(NV), Q = new Int32Array(NV);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
    const v = j * NX + i, [x, z] = toXZ(LON0 + i * DLON, LAT0 + j * DLAT);
    PX[v] = x; PZ[v] = z; pos[v * 3] = x; pos[v * 3 + 2] = z; uvs[v * 2] = i / (NX - 1); uvs[v * 2 + 1] = j / (NY - 1);
  }
  const idx = new Uint32Array((NX - 1) * (NY - 1) * 6); let q = 0;
  for (let j = 0; j < NY - 1; j++) for (let i = 0; i < NX - 1; i++) { const a = j * NX + i, b = a + 1, c = a + NX, d = c + 1;
    idx[q++] = a; idx[q++] = b; idx[q++] = c; idx[q++] = b; idx[q++] = d; idx[q++] = c; }
  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(pos, 3), nrmAttr = new THREE.BufferAttribute(nrm, 3), wetAttr = new THREE.BufferAttribute(wetA, 1);
  posAttr.setUsage(THREE.DynamicDrawUsage); nrmAttr.setUsage(THREE.DynamicDrawUsage); wetAttr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posAttr); geo.setAttribute('normal', nrmAttr); geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setAttribute('aH', new THREE.BufferAttribute(H, 1)); geo.setAttribute('aWet', wetAttr); geo.setIndex(new THREE.BufferAttribute(idx, 1));

  const maskTex = new THREE.Texture(maskImg); maskTex.minFilter = THREE.LinearFilter; maskTex.magFilter = THREE.LinearFilter;
  maskTex.generateMipmaps = false; maskTex.needsUpdate = true;
  let lutTex = null;
  function buildLut() {
    const data = new Uint8Array(LUT_N * 4);
    for (let k = 0; k < LUT_N; k++) { const c = colorAt(LUT_MIN + (k + 0.5) / LUT_N * (LUT_MAX - LUT_MIN)); data[k * 4] = c[0]; data[k * 4 + 1] = c[1]; data[k * 4 + 2] = c[2]; data[k * 4 + 3] = 255; }
    const t = new THREE.DataTexture(data, LUT_N, 1, THREE.RGBAFormat);
    const disc = SCHEMES[state.scheme].discrete; t.minFilter = t.magFilter = disc ? THREE.NearestFilter : THREE.LinearFilter;
    t.needsUpdate = true; if (lutTex) lutTex.dispose(); lutTex = t; if (mat) mat.uniforms.uLut.value = t;
  }
  let mat = null; buildLut();
  const L_AZ = 315 * D2R, L_ALT = 42 * D2R;
  mat = new THREE.ShaderMaterial({
    uniforms: {
      uLut: { value: lutTex }, uMask: { value: maskTex }, uLutMin: { value: LUT_MIN }, uLutMax: { value: LUT_MAX },
      uSea: { value: 0 }, uSeaMode: { value: 0 }, uContour: { value: 0 }, uDim: { value: 1 }, uShade: { value: state.shade },
      uLight: { value: new THREE.Vector3(Math.sin(L_AZ) * Math.cos(L_ALT), Math.sin(L_ALT), -Math.cos(L_AZ) * Math.cos(L_ALT)).normalize() },
      uDimTint: { value: v3('#EEF1ED') }, uDimMix: { value: 0.58 },
      uShallow: { value: v3(WATER_SHALLOW) }, uDeep: { value: v3(WATER_DEEP) }, uLake: { value: v3(LAKE) },
    },
    vertexShader: `
      attribute float aH; attribute float aWet;
      varying float vH; varying float vWet; varying vec3 vN; varying vec2 vUv;
      void main(){ vH = aH; vWet = aWet; vN = normal; vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform sampler2D uLut; uniform sampler2D uMask;
      uniform float uLutMin, uLutMax, uSea, uSeaMode, uContour, uDim, uShade, uDimMix;
      uniform vec3 uLight, uDimTint, uShallow, uDeep, uLake;
      varying float vH; varying float vWet; varying vec3 vN; varying vec2 vUv;
      void main(){
        vec3 m = texture2D(uMask, vUv).rgb;
        float china = step(0.0019, m.r);
        float landM = smoothstep(0.35, 0.65, m.b);
        float wetS = smoothstep(0.3, 0.7, vWet);
        float water = uSeaMode < 0.5 ? 1.0 - landM : (uSeaMode < 1.5 ? max(wetS, 1.0 - landM) : wetS);
        float h = vH;
        float t = clamp((h - uLutMin) / (uLutMax - uLutMin), 0.0, 1.0);
        vec3 landCol = texture2D(uLut, vec2(t, 0.5)).rgb;
        landCol = mix(landCol, uLake, smoothstep(0.3, 0.7, m.g));
        float lum = dot(landCol, vec3(0.299, 0.587, 0.114));
        landCol = mix(landCol, mix(vec3(lum), uDimTint, uDimMix), uDim * (1.0 - china));
        float depth = clamp((uSea - h) / 6500.0, 0.0, 1.0);
        vec3 waterCol = mix(uShallow, uDeep, pow(depth, 0.5));
        vec3 col = mix(landCol, waterCol, water);
        vec3 n = normalize(vN);
        float diff = dot(n, uLight);
        float lit = clamp(0.40 + 0.80 * diff, 0.0, 1.3);
        col *= mix(1.0, lit, uShade * mix(1.0, 0.45, water));
        if (uContour > 0.0) {
          float f = h / uContour;
          float fw = max(fwidth(f), 1e-4);
          float dist = abs(fract(f + 0.5) - 0.5) / fw;
          float a = 1.0 - smoothstep(0.45, 1.3, dist);
          float major = 1.0 - step(0.5, abs(mod(floor(f + 0.5), 5.0)));
          a *= (1.0 - water) * step(1.0, h) * mix(0.5, 0.85, major);
          col = mix(col, col * 0.32, a);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
    polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 2,
  });
  mat.extensions = { derivatives: true };
  const terrain = new THREE.Mesh(geo, mat); terrain.frustumCulled = false; scene.add(terrain);

  /* ---------- sampling ---------- */
  function surfY(lon, lat) {
    const fi = (lon - LON0) / DLON, fj = (lat - LAT0) / DLAT;
    if (!(fi >= 0 && fj >= 0 && fi <= NX - 1 && fj <= NY - 1)) return NaN;
    const i = Math.min(Math.floor(fi), NX - 2), j = Math.min(Math.floor(fj), NY - 2), tx = fi - i, ty = fj - j;
    const a = j * NX + i, b = a + 1, c = a + NX, d = c + 1;
    if (tx + ty <= 1) return Y[a] + (Y[b] - Y[a]) * tx + (Y[c] - Y[a]) * ty;
    return Y[d] + (Y[c] - Y[d]) * (1 - tx) + (Y[b] - Y[d]) * (1 - ty);
  }
  function sampleH(lon, lat) {
    const fi = (lon - LON0) / DLON, fj = (lat - LAT0) / DLAT;
    if (!(fi >= 0 && fj >= 0 && fi <= NX - 1 && fj <= NY - 1)) return NaN;
    const i = Math.min(Math.floor(fi), NX - 2), j = Math.min(Math.floor(fj), NY - 2), tx = fi - i, ty = fj - j, v = j * NX + i;
    return (H[v] * (1 - tx) + H[v + 1] * tx) * (1 - ty) + (H[v + NX] * (1 - tx) + H[v + NX + 1] * tx) * ty;
  }
  function wetAt(lon, lat) { const i = Math.round((lon - LON0) / DLON), j = Math.round((lat - LAT0) / DLAT);
    if (i < 0 || j < 0 || i >= NX || j >= NY) return false; return WET[j * NX + i] === 1; }
  const seaY = () => state.sea * M2U * state.exag;
  const LIFT = () => 0.008 + 0.00042 * state.exag;

  /* ---------- flooding (connected to the ocean only) ---------- */
  function computeWet(sea) {
    WET.fill(0); let qh = 0, qt = 0;
    const seed = v => { if (!WET[v] && H[v] < sea && SEAV[v]) { WET[v] = 1; Q[qt++] = v; } };
    for (let i = 0; i < NX; i++) { seed(i); seed((NY - 1) * NX + i); }
    for (let j = 0; j < NY; j++) { seed(j * NX); seed(j * NX + NX - 1); }
    const push = u => { if (!WET[u] && H[u] < sea) { WET[u] = 1; Q[qt++] = u; } };
    while (qh < qt) { const v = Q[qh++], i = v % NX;
      if (i > 0) push(v - 1); if (i < NX - 1) push(v + 1); if (v >= NX) push(v - NX); if (v < NV - NX) push(v + NX); }
  }

  let YMIN = 0, YMAX = 1, dirty = true;
  function updateTerrain() {
    const k = M2U * state.exag, flat = !state.bathy, sea = state.sea; let lo = Infinity, hi = -Infinity;
    for (let v = 0; v < NV; v++) { const h = (flat && WET[v]) ? sea : H[v]; const y = h * k; Y[v] = y; pos[v * 3 + 1] = y; wetA[v] = WET[v];
      if (y < lo) lo = y; if (y > hi) hi = y; }
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const v = j * NX + i, iL = i > 0 ? v - 1 : v, iR = i < NX - 1 ? v + 1 : v, jD = j > 0 ? v - NX : v, jU = j < NY - 1 ? v + NX : v;
      const ax = PX[iR] - PX[iL], ay = Y[iR] - Y[iL], az = PZ[iR] - PZ[iL];
      const bx = PX[jU] - PX[jD], by = Y[jU] - Y[jD], bz = PZ[jU] - PZ[jD];
      let nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
      const l = Math.hypot(nx, ny, nz) || 1; if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
      nrm[v * 3] = nx / l; nrm[v * 3 + 1] = ny / l; nrm[v * 3 + 2] = nz / l;
    }
    YMIN = lo; YMAX = hi; posAttr.needsUpdate = true; nrmAttr.needsUpdate = true; wetAttr.needsUpdate = true;
    const u = mat.uniforms; u.uSea.value = sea; u.uSeaMode.value = Math.abs(sea) < 0.5 ? 0 : (sea > 0 ? 1 : 2);
    lineLayers.forEach(l => l.update()); updateAnchors(); dirty = true;
  }

  /* ---------- draped lines ---------- */
  const lineLayers = [];
  function decode(arr) { return arr.map(f => { const out = []; let x = f[0], y = f[1]; out.push([x / 100, y / 100]);
    for (let i = 2; i < f.length; i += 2) { x += f[i]; y += f[i + 1]; out.push([x / 100, y / 100]); } return out; }); }
  function densify(pl, step) { const out = [pl[0]];
    for (let k = 1; k < pl.length; k++) { const [x0, y0] = pl[k - 1], [x1, y1] = pl[k]; const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step));
      for (let s = 1; s <= n; s++) out.push([x0 + (x1 - x0) * s / n, y0 + (y1 - y0) * s / n]); } return out; }
  class Draped {
    constructor(polylines, o) {
      const segs = []; for (const pl of polylines) { const d = densify(pl, o.step || 0.06); for (let k = 1; k < d.length; k++) segs.push(d[k - 1][0], d[k - 1][1], d[k][0], d[k][1]); }
      this.ll = new Float32Array(segs); const n = segs.length / 4; this.pos = new Float32Array(n * 6);
      for (let s = 0; s < n; s++) { const a = toXZ(segs[s * 4], segs[s * 4 + 1]), b = toXZ(segs[s * 4 + 2], segs[s * 4 + 3]);
        this.pos[s * 6] = a[0]; this.pos[s * 6 + 2] = a[1]; this.pos[s * 6 + 3] = b[0]; this.pos[s * 6 + 5] = b[1]; }
      this.geom = new LineSegmentsGeometry(); this.geom.setPositions(this.pos);
      this.mat = new LineMaterial({ color: o.color, linewidth: o.width, transparent: true, opacity: o.opacity ?? 1, depthWrite: false,
        dashed: !!o.dashed, dashSize: o.dash || 0.35, gapSize: o.gap || 0.22 });
      this.mat.resolution.set(VW, VH);
      this.obj = new LineSegments2(this.geom, this.mat); this.obj.frustumCulled = false; this.obj.renderOrder = o.order || 1;
      this.k = o.lift ?? 1; this.dashed = !!o.dashed; this.fresh = true; this.layer = o.layer;
      scene.add(this.obj); lineLayers.push(this); this.update();
    }
    update() {
      const lift = LIFT() * this.k, p = this.pos, ll = this.ll, n = p.length / 6;
      for (let s = 0; s < n; s++) { const y0 = surfY(ll[s * 4], ll[s * 4 + 1]), y1 = surfY(ll[s * 4 + 2], ll[s * 4 + 3]);
        p[s * 6 + 1] = (y0 === y0 ? y0 : 0) + lift; p[s * 6 + 4] = (y1 === y1 ? y1 : 0) + lift; }
      this.geom.attributes.instanceStart.data.needsUpdate = true;
      if (this.dashed && this.fresh) { this.obj.computeLineDistances(); this.fresh = false; }
    }
    dispose() { scene.remove(this.obj); this.geom.dispose(); this.mat.dispose(); lineLayers.splice(lineLayers.indexOf(this), 1); }
  }
  const LN = G.lines;
  new Draped(decode(LN.nbr), { color: '#5B6169', width: 1.1, opacity: 0.7, layer: 'admin', order: 2 });
  new Draped(decode(LN.prov), { color: '#6B5579', width: 1.0, opacity: 0.8, layer: 'admin', order: 2 });
  new Draped(decode(LN.china), { color: '#7B2143', width: 2.3, layer: 'admin', order: 3 });
  new Draped(decode(LN.dash), { color: '#7B2143', width: 2.3, layer: 'admin', order: 3, step: 0.03 });
  new Draped(decode(LN.r3), { color: '#4A90C8', width: 0.9, opacity: 0.75, layer: 'rivers', order: 1 });
  new Draped(decode(LN.r2), { color: '#2F7FBF', width: 1.3, opacity: 0.9, layer: 'rivers', order: 1 });
  new Draped(decode(LN.r1), { color: '#1D6AAE', width: 2.0, layer: 'rivers', order: 1 });
  new Draped([STEP12, STEP23], { color: '#E0561F', width: 3.2, layer: 'steps', order: 4, dashed: true, dash: 0.42, gap: 0.2, lift: 1.4 });
  new Draped([QINHUAI], { color: '#16875A', width: 3.0, layer: 'qinhuai', order: 4, dashed: true, dash: 0.36, gap: 0.2, lift: 1.4 });
  new Draped([HULINE], { color: '#6A3FB5', width: 2.8, layer: 'hu', order: 4, dashed: true, dash: 0.5, gap: 0.26, lift: 1.4, step: 0.05 });
  function applyLayerVis() { lineLayers.forEach(l => { if (l.layer) l.obj.visible = !!state.layers[l.layer]; });
    LABELS.forEach(lb => { if (lb.layer) lb.on = !!state.layers[lb.layer]; }); dirty = true; }

  /* ---------- HTML labels ---------- */
  const labelBox = $('labels');
  for (const lb of LABELS) {
    const el = document.createElement('div'); el.className = 'lbl t-' + lb.type + (lb.small ? ' s' : '') + (lb.cap ? ' cap' : '') + (lb.low ? ' low' : '');
    if (lb.type === 'peak') el.innerHTML = `<i></i><span>${lb.name}</span><em>${lb.val}</em>`;
    else if (lb.type === 'city') el.innerHTML = `<i></i><span>${lb.name}</span>`;
    else el.textContent = lb.name;
    if (lb.type === 'tag') el.style.background = lb.color;
    if (INFO[lb.name]) { el.classList.add('click'); el.tabIndex = 0; el.setAttribute('role', 'button');
      const go = () => showInfo(lb); el.addEventListener('click', go); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); }
    if (lb.type === 'tag' && LINE_INFO[lb.layer]) { el.classList.add('click'); el.addEventListener('click', () => showLineInfo(lb.layer)); }
    labelBox.appendChild(el); lb.el = el; lb.on = true; lb.shown = false;
    lb.xz = toXZ(lb.lon, lb.lat); lb.anchorLeft = lb.type === 'peak' || lb.type === 'city';
  }
  // profile pins (always drawn, not decluttered)
  const pins = {};
  for (const id of ['A', 'B', 'cur']) { const el = document.createElement('div'); el.className = 'lbl t-pin' + (id === 'cur' ? ' cur' : ''); el.textContent = id === 'cur' ? '' : id;
    labelBox.appendChild(el); pins[id] = { el, ll: null, w: 0, h: 0 }; }
  LABELS.sort((a, b) => b.pri - a.pri);
  function measure() { for (const lb of LABELS) { lb.w = lb.el.offsetWidth; lb.h = lb.el.offsetHeight; }
    for (const k in pins) { pins[k].w = pins[k].el.offsetWidth; pins[k].h = pins[k].el.offsetHeight; } dirty = true; }
  function updateAnchors() {
    const sy = seaY();
    for (const lb of LABELS) { let y = surfY(lb.lon, lb.lat); if (!(y === y)) y = 0;
      if (lb.type === 'sea' || lb.type === 'lake' || lb.type === 'river') y = Math.max(y, state.bathy ? sy : y);
      lb.y = Math.max(y, sy) + LIFT() * 2 + 0.01; }
  }
  const _v = new THREE.Vector3();
  function place(el, x, y) { el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`; }
  function updateLabels() {
    const rects = [];
    for (const lb of LABELS) {
      let ok = lb.on;
      if (ok) { _v.set(lb.xz[0], lb.y, lb.xz[1]).project(camera); ok = _v.z < 1 && _v.z > -1; }
      let x = 0, y = 0;
      if (ok) { const sx = (_v.x * 0.5 + 0.5) * VW, sy = (-_v.y * 0.5 + 0.5) * VH;
        x = lb.anchorLeft ? sx - 5 : sx - lb.w / 2; y = sy - lb.h / 2;
        ok = x > -lb.w && y > -lb.h && x < VW && y < VH;
        if (ok) { const r = [x - 3, y - 2, x + lb.w + 3, y + lb.h + 2];
          for (const o of rects) if (r[0] < o[2] && r[2] > o[0] && r[1] < o[3] && r[3] > o[1]) { ok = false; break; }
          if (ok) rects.push(r); } }
      if (ok) { place(lb.el, x, y); if (!lb.shown) { lb.el.classList.add('show'); lb.shown = true; } }
      else if (lb.shown) { lb.el.classList.remove('show'); lb.shown = false; }
    }
    for (const k in pins) { const p = pins[k]; let ok = !!p.ll;
      if (ok) { const [x, z] = toXZ(p.ll[0], p.ll[1]); let y = surfY(p.ll[0], p.ll[1]); if (!(y === y)) y = 0;
        _v.set(x, y + LIFT() * 2, z).project(camera); ok = _v.z < 1 && _v.z > -1;
        if (ok) place(p.el, (_v.x * 0.5 + 0.5) * VW - p.w / 2, (-_v.y * 0.5 + 0.5) * VH - p.h / 2); }
      p.el.classList.toggle('show', ok); }
  }

  /* ---------- camera views ---------- */
  const panelEl = $('panel'), fab = $('fab');
  const isNarrow = () => app.clientWidth <= 760;
  function panelOffset() { return (!isNarrow() && !panelEl.hidden) ? (panelEl.offsetWidth + 16) : 0; }
  function resize() {
    VW = Math.max(1, app.clientWidth); VH = Math.max(1, app.clientHeight); renderer.setSize(VW, VH, false);
    lineLayers.forEach(l => l.mat.resolution.set(VW, VH));
    camera.aspect = VW / VH; const off = panelOffset();
    if (off) camera.setViewOffset(VW, VH, off / 2, 0, VW, VH); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); dirty = true; if (!$('profile').hidden) drawProfile();
  }
  const VIEWS = [
    { name: '全国总览', lon: 104.8, lat: 34.2, w: 56, polar: 46, az: 0 },
    { name: '正射俯视', lon: 107, lat: 30.5, w: 62, h: 58, polar: 0.2, az: 0 },
    { name: '青藏高原', lon: 88, lat: 32.2, w: 27, polar: 58, az: -10 },
    { name: '塔里木 · 天山', lon: 84, lat: 41.2, w: 22, polar: 56, az: 6 },
    { name: '四川盆地', lon: 105.6, lat: 30.2, w: 10, polar: 52, az: 16 },
    { name: '黄土高原', lon: 108.5, lat: 36.8, w: 11, polar: 52, az: -6 },
    { name: '华北 · 太行山', lon: 115.2, lat: 37.3, w: 10, polar: 58, az: 78 },
    { name: '横断山区', lon: 99.5, lat: 27.6, w: 8, polar: 50, az: -8 },
    { name: '台湾岛', lon: 121, lat: 23.7, w: 5, polar: 54, az: 62 },
    { name: '南海', lon: 114, lat: 12.5, w: 26, polar: 26, az: 0 },
  ];
  function viewDist(v) { const t = Math.tan(camera.fov * D2R / 2), aw = Math.max(1, VW - panelOffset()) / VH;
    return Math.min(220, Math.max((v.w / 2) / (t * aw), ((v.h || v.w * 0.6) / 2) / t) * (v.polar > 10 ? 0.92 : 1)); }
  let anim = null;
  function flyTo(v, dur = 1500) {
    const [x, z] = toXZ(v.lon, v.lat); let ty = surfY(v.lon, v.lat); if (!(ty === ty)) ty = 0;
    const to = { t: new THREE.Vector3(x, Math.max(ty, seaY()) * 0.6, z), r: v.d || viewDist(v), phi: Math.max(0.004, v.polar * D2R), th: (v.az ?? 0) * D2R };
    const off = camera.position.clone().sub(controls.target), sp = new THREE.Spherical().setFromVector3(off);
    const from = { t: controls.target.clone(), r: sp.radius, phi: sp.phi, th: sp.theta };
    let dTh = to.th - from.th; dTh = Math.atan2(Math.sin(dTh), Math.cos(dTh));
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    anim = { from, to, dTh, t0: performance.now(), dur: reduce ? 1 : dur };
  }
  function stepAnim(now) {
    if (!anim) return false; const k = Math.min(1, (now - anim.t0) / anim.dur), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    const { from, to } = anim; controls.target.lerpVectors(from.t, to.t, e);
    const sp = new THREE.Spherical(from.r * Math.pow(to.r / from.r, e), from.phi + (to.phi - from.phi) * e, from.th + anim.dTh * e);
    camera.position.setFromSpherical(sp).add(controls.target); camera.lookAt(controls.target);
    if (k >= 1) anim = null; return true;
  }
  controls.addEventListener('start', () => { anim = null; });

  /* ---------- picking by ray-marching the height field ---------- */
  const rc = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function diffAt(o, d, t) { const x = o.x + d.x * t, z = o.z + d.z * t, ll = fromXZ(x, z); if (!ll) return NaN;
    if (ll[0] < LON0 || ll[0] > LON1 || ll[1] < LAT0 || ll[1] > LAT1) return NaN; return o.y + d.y * t - surfY(ll[0], ll[1]); }
  function pickAt(cx, cy) {
    const r = canvas.getBoundingClientRect(); ndc.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    rc.setFromCamera(ndc, camera); const o = rc.ray.origin, d = rc.ray.direction;
    const top = YMAX + 0.02, bot = YMIN - 0.02; let t0, t1;
    if (Math.abs(d.y) < 1e-9) { if (o.y > top || o.y < bot) return null; t0 = 0; t1 = 500; }
    else { const ta = (top - o.y) / d.y, tb = (bot - o.y) / d.y; t0 = Math.max(0, Math.min(ta, tb)); t1 = Math.max(ta, tb); if (t1 <= 0) return null; }
    let step = 0.035 / Math.max(Math.hypot(d.x, d.z), 1e-3); step = Math.max(step, (t1 - t0) / 4000); step = Math.min(step, Math.max((t1 - t0) / 6, 1e-4));
    let prev = null;
    for (let t = t0; ; t += step) { const tt = Math.min(t, t1), f = diffAt(o, d, tt);
      if (f !== f) { prev = null; } else if (f <= 0) { let a = prev === null ? tt : prev, b = tt;
        for (let i = 0; i < 16 && prev !== null; i++) { const m = (a + b) / 2, fm = diffAt(o, d, m); if (fm > 0) a = m; else b = m; }
        const ll = fromXZ(o.x + d.x * b, o.z + d.z * b); return ll ? { lon: ll[0], lat: ll[1] } : null; } else prev = tt;
      if (tt >= t1) break; }
    return null;
  }

  /* ---------- readout ---------- */
  const rLon = $('rLon'), rLat = $('rLat'), rEle = $('rEle'), rReg = $('rReg');
  function regionName(lon, lat) { const m = maskAt(lon, lat); if (!m) return '—';
    if (m[0] > 0) return PROV_FULL[G.prov[m[0] - 1]] || G.prov[m[0] - 1]; if (m[1] > 127) return '湖泊（中国境外）'; return m[2] > 127 ? '中国境外' : '海域'; }
  function fmtLon(x) { return x.toFixed(2) + '°E'; } function fmtLat(y) { return y >= 0 ? y.toFixed(2) + '°N' : (-y).toFixed(2) + '°S'; }
  function showReadout(p) {
    if (!p) return; const h = sampleH(p.lon, p.lat); rLon.textContent = fmtLon(p.lon); rLat.textContent = fmtLat(p.lat);
    const wet = wetAt(p.lon, p.lat) || (Math.abs(state.sea) < 0.5 && (maskAt(p.lon, p.lat) || [0, 0, 255])[2] < 128);
    rEle.textContent = (Math.round(h)).toLocaleString('zh-CN') + ' m' + (wet && h < state.sea ? '（水下）' : '');
    rReg.textContent = regionName(p.lon, p.lat);
  }

  /* ---------- info card ---------- */
  const card = $('card');
  function showInfo(lb) { const inf = INFO[lb.name]; $('cardKind').textContent = inf[0]; $('cardTitle').textContent = lb.name; $('cardText').textContent = inf[1];
    $('cardCoord').textContent = `${fmtLon(lb.lon)}  ${fmtLat(lb.lat)}  ·  网格高程约 ${Math.round(sampleH(lb.lon, lb.lat))} m`; card.hidden = false;
    const w = lb.type === 'peak' ? 3.2 : lb.type === 'mtn' ? 9 : (lb.name === '青藏高原' ? 26 : lb.name === '内蒙古高原' ? 18 : 13);
    const sp = new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
    flyTo({ lon: lb.lon, lat: lb.lat, w, polar: Math.min(Math.max(sp.phi / D2R, 38), 62), az: sp.theta / D2R }); }
  function showLineInfo(layer) { const inf = LINE_INFO[layer]; if (!inf) return;
    const title = { steps: '地势的三级阶梯', qinhuai: '秦岭—淮河线', hu: '胡焕庸线' }[layer];
    $('cardKind').textContent = inf[0]; $('cardTitle').textContent = title; $('cardText').textContent = inf[1]; $('cardCoord').textContent = '分界线位置为教学示意'; card.hidden = false; }
  $('cardClose').addEventListener('click', () => { card.hidden = true; });

  /* ---------- profile ---------- */
  const prof = { mode: false, A: null, B: null, line: null, S: null, hover: -1 };
  const hint = $('hint'), HINT_DEFAULT = hint.textContent, btnPick = $('btnPick');
  function setProfLine(A, B) { if (prof.line) prof.line.dispose(); if (!A || !B) { prof.line = null; dirty = true; return; }
    prof.line = new Draped([[A, B]], { color: cssVar('--vermilion'), width: 3.4, order: 6, lift: 1.8, step: 0.04 }); dirty = true; }
  function setPick(on) { prof.mode = on; btnPick.classList.toggle('on', on); btnPick.textContent = on ? '取消点选' : '在地图上点选两点';
    hint.classList.toggle('pick', on); hint.textContent = on ? (prof.A ? '单击地图，选择终点 B' : '单击地图，选择起点 A') : HINT_DEFAULT; canvas.style.cursor = on ? 'crosshair' : ''; }
  btnPick.addEventListener('click', () => { if (prof.mode) { setPick(false); if (!prof.B) { prof.A = null; pins.A.ll = null; setProfLine(null); } return; }
    prof.A = prof.B = null; prof.S = null; pins.A.ll = pins.B.ll = pins.cur.ll = null; setProfLine(null); $('profile').hidden = true; app.classList.remove('has-profile');
    setPick(true); if (isNarrow()) closePanel(); });
  const hav = (a, b) => { const p1 = a[1] * D2R, p2 = b[1] * D2R, dp = p2 - p1, dl = (b[0] - a[0]) * D2R;
    const s = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2; return 12742 * Math.asin(Math.min(1, Math.sqrt(s))); };
  function segT(a, b, c, d) { const r1x = b[0] - a[0], r1y = b[1] - a[1], r2x = d[0] - c[0], r2y = d[1] - c[1], den = r1x * r2y - r1y * r2x;
    if (Math.abs(den) < 1e-12) return null; const t = ((c[0] - a[0]) * r2y - (c[1] - a[1]) * r2x) / den, u = ((c[0] - a[0]) * r1y - (c[1] - a[1]) * r1x) / den;
    return (t >= 0 && t <= 1 && u >= 0 && u <= 1) ? t : null; }
  function buildProfile() {
    const A = prof.A, B = prof.B, N = 720, S = [];
    let dist = 0, prev = A;
    for (let k = 0; k <= N; k++) { const t = k / N, ll = [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t]; dist += hav(prev, ll); prev = ll;
      S.push({ lon: ll[0], lat: ll[1], d: dist, h: sampleH(ll[0], ll[1]), wet: wetAt(ll[0], ll[1]) || (Math.abs(state.sea) < 0.5 && (maskAt(ll[0], ll[1]) || [0, 0, 255])[2] < 128) }); }
    const marks = [];
    const addCross = (line, label, color) => { for (let k = 1; k < line.length; k++) { const t = segT(A, B, line[k - 1], line[k]); if (t !== null) marks.push({ t, label, color }); } };
    addCross(STEP12, 'Ⅰ | Ⅱ 级阶梯界', '#E0561F'); addCross(STEP23, 'Ⅱ | Ⅲ 级阶梯界', '#E0561F');
    if (state.layers.qinhuai) addCross(QINHUAI, '秦岭—淮河线', '#16875A'); if (state.layers.hu) addCross(HULINE, '胡焕庸线', '#6A3FB5');
    const feats = []; const cl = Math.cos((A[1] + B[1]) / 2 * D2R), bx = (B[0] - A[0]) * cl, by = B[1] - A[1], bb = bx * bx + by * by || 1;
    const TH = { region: 1.7, mtn: 0.9, sea: 2.4, peak: 0.35, lake: 0.3 };
    for (const lb of LABELS) { const th = TH[lb.type]; if (!th) continue; const px = (lb.lon - A[0]) * cl, py = lb.lat - A[1];
      const t = (px * bx + py * by) / bb; if (t < 0.015 || t > 0.985) continue; const dx = px - bx * t, dy = py - by * t;
      if (Math.hypot(dx, dy) <= th) feats.push({ t, name: lb.name, pri: lb.pri, type: lb.type }); }
    feats.sort((a, b) => b.pri - a.pri);
    prof.S = S; prof.marks = marks; prof.feats = feats; prof.hover = -1;
    $('profile').hidden = false; app.classList.add('has-profile'); drawProfile();
  }
  function nice(range, target) { const raw = range / target, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }
  const pc = $('profCanvas'), pw = $('profWrap'), tip = $('profTip');
  let PG = null;
  function drawProfile() {
    const S = prof.S; if (!S) return;
    const dpr = Math.min(devicePixelRatio || 1, 2), W = pw.clientWidth, Hh = pw.clientHeight; if (!W || !Hh) return;
    pc.width = Math.round(W * dpr); pc.height = Math.round(Hh * dpr); const c = pc.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, Hh);
    const ink = cssVar('--ink'), ink2 = cssVar('--ink-2'), muted = cssVar('--muted'), rule = cssVar('--rule'), panel = cssVar('--panel-solid');
    const mL = 54, mR = 16, mT = 30, mB = 24, gw = W - mL - mR, gh = Hh - mT - mB, total = S[S.length - 1].d || 1;
    let lo = Infinity, hi = -Infinity; for (const s of S) { if (s.h < lo) lo = s.h; if (s.h > hi) hi = s.h; }
    const ystep = nice(Math.max(hi, 0) - Math.min(lo, 0), 4);
    const minV = Math.min(lo, state.sea), maxV = Math.max(hi, 200, state.sea);
    const yMin = minV < -ystep * 0.3 ? Math.floor(minV / ystep) * ystep : Math.min(0, minV) - ystep * 0.08, yMax = Math.ceil(maxV / ystep) * ystep;
    const X = d => mL + d / total * gw, Yp = h => mT + (yMax - h) / (yMax - yMin) * gh;
    PG = { X, Yp, mL, gw, total };
    c.font = `11px ${cssVar('--f-mono')}`; c.textBaseline = 'middle';
    c.strokeStyle = rule; c.lineWidth = 1; c.fillStyle = muted; c.textAlign = 'right';
    for (let h = Math.ceil(yMin / ystep) * ystep; h <= yMax + 1e-6; h += ystep) { const y = Math.round(Yp(h)) + 0.5; c.beginPath(); c.moveTo(mL, y); c.lineTo(mL + gw, y); c.stroke(); c.fillText((h + 0).toLocaleString('zh-CN'), mL - 7, y); }
    const xstep = nice(total, Math.max(3, Math.floor(gw / 110))); c.textAlign = 'center'; c.textBaseline = 'top';
    for (let d = 0; d <= total + 1e-6; d += xstep) { const x = X(d); c.fillText(d === 0 ? '0' : d.toLocaleString('zh-CN'), x, mT + gh + 6); }
    c.textAlign = 'right'; c.fillText('km', mL - 7, mT + gh + 6); c.textBaseline = 'middle';
    c.save(); c.font = `600 10.5px ${cssVar('--f-sans')}`; c.fillStyle = muted; c.textAlign = 'left'; c.fillText('海拔 m', 6, 14); c.restore();
    // terrain body
    const path = new Path2D(); path.moveTo(X(0), Yp(yMin)); for (const s of S) path.lineTo(X(s.d), Yp(s.h)); path.lineTo(X(total), Yp(yMin)); path.closePath();
    c.save(); c.clip(path);
    const sch = SCHEMES[state.scheme];
    if (sch.discrete) { const st = sch.stops; for (let i = 0; i < st.length; i++) { const b0 = i === 0 ? yMin - 1e4 : st[i][0], b1 = i + 1 < st.length ? st[i + 1][0] : yMax + 1e4;
        const ya = Yp(Math.min(b1, yMax + 1e4)), yb = Yp(b0); c.fillStyle = st[i][1]; c.fillRect(mL, ya, gw, yb - ya); } }
    else { const g = c.createLinearGradient(0, Yp(yMin), 0, Yp(yMax)); for (let k = 0; k <= 24; k++) { const h = yMin + (yMax - yMin) * k / 24; g.addColorStop(k / 24, rgbStr(colorAt(h))); } c.fillStyle = g; c.fillRect(mL, mT, gw, gh); }
    c.restore();
    // water bodies
    const seaPx = Yp(state.sea); let k = 0;
    while (k < S.length) { if (!(S[k].wet && S[k].h < state.sea)) { k++; continue; } let e = k; while (e + 1 < S.length && S[e + 1].wet && S[e + 1].h < state.sea) e++;
      const wp = new Path2D(); wp.moveTo(X(S[k].d), seaPx); for (let i = k; i <= e; i++) wp.lineTo(X(S[i].d), Yp(S[i].h)); wp.lineTo(X(S[e].d), seaPx); wp.closePath();
      const g = c.createLinearGradient(0, seaPx, 0, Yp(yMin)); g.addColorStop(0, WATER_SHALLOW); g.addColorStop(1, WATER_DEEP); c.fillStyle = g; c.fill(wp);
      c.strokeStyle = '#2A6FA8'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(X(S[k].d), seaPx); c.lineTo(X(S[e].d), seaPx); c.stroke(); k = e + 1; }
    // outline
    c.beginPath(); S.forEach((s, i) => i ? c.lineTo(X(s.d), Yp(s.h)) : c.moveTo(X(s.d), Yp(s.h))); c.strokeStyle = ink; c.lineWidth = 1.4; c.lineJoin = 'round'; c.stroke();
    // crossings
    c.font = `600 10.5px ${cssVar('--f-sans')}`; c.textAlign = 'center';
    for (const m of prof.marks) { const x = X(m.t * total); c.save(); c.setLineDash([4, 3]); c.strokeStyle = m.color; c.lineWidth = 1.4; c.beginPath(); c.moveTo(x, mT); c.lineTo(x, mT + gh); c.stroke(); c.restore();
      const tw = c.measureText(m.label).width + 10; c.fillStyle = m.color; c.fillRect(x - tw / 2, mT + gh - 20, tw, 16); c.fillStyle = '#fff'; c.fillText(m.label, x, mT + gh - 12); }
    // features along the line
    c.font = `700 12px ${cssVar('--f-serif')}`; c.textBaseline = 'middle'; const placed = [];
    for (const f of prof.feats) { const x = X(f.t * total), w = c.measureText(f.name).width + 8; if (x - w / 2 < mL - 20 || x + w / 2 > W) continue;
      if (placed.some(p => Math.abs(p - x) < (w + 60) / 2)) continue; placed.push(x);
      const hk = Math.round(f.t * (S.length - 1)); c.strokeStyle = muted; c.lineWidth = 1; c.beginPath(); c.moveTo(x + 0.5, mT - 7); c.lineTo(x + 0.5, Yp(S[hk].h) - 3); c.setLineDash([1, 2]); c.stroke(); c.setLineDash([]);
      c.fillStyle = f.type === 'sea' || f.type === 'lake' ? cssVar('--l-water') : cssVar('--l-land'); c.fillText(f.name, x, mT - 15); if (placed.length >= 9) break; }
    // hover cursor
    if (prof.hover >= 0) { const s = S[prof.hover], x = X(s.d); c.strokeStyle = cssVar('--vermilion'); c.lineWidth = 1.2; c.beginPath(); c.moveTo(x + 0.5, mT); c.lineTo(x + 0.5, mT + gh); c.stroke();
      c.fillStyle = cssVar('--vermilion'); c.beginPath(); c.arc(x, Yp(s.h), 4, 0, 7); c.fill(); c.strokeStyle = panel; c.lineWidth = 1.5; c.stroke(); }
    // meta text
    const vx = total * 1000 / gw, vy = (yMax - yMin) / gh, ve = Math.round(vx / vy);
    $('profMeta').textContent = `A ${fmtLon(prof.A[0])} ${fmtLat(prof.A[1])} → B ${fmtLon(prof.B[0])} ${fmtLat(prof.B[1])} · 全长 ${Math.round(total).toLocaleString('zh-CN')} km · 最高 ${Math.round(hi).toLocaleString('zh-CN')} m · 最低 ${Math.round(lo).toLocaleString('zh-CN')} m · 图中垂直夸张约 ${ve.toLocaleString('zh-CN')} 倍`;
  }
  pc.addEventListener('pointermove', e => { if (!prof.S || !PG) return; const r = pc.getBoundingClientRect(), x = e.clientX - r.left;
    const d = (x - PG.mL) / PG.gw * PG.total; if (d < 0 || d > PG.total) { pc.dispatchEvent(new Event('pointerleave')); return; }
    let k = 0; const S = prof.S; let lo = 0, hi = S.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (S[m].d < d) lo = m; else hi = m; } k = (d - S[lo].d) < (S[hi].d - d) ? lo : hi;
    prof.hover = k; drawProfile(); const s = S[k];
    tip.hidden = false; tip.innerHTML = `${Math.round(s.d).toLocaleString('zh-CN')} km · <b>${Math.round(s.h).toLocaleString('zh-CN')} m</b><br>${fmtLon(s.lon)} ${fmtLat(s.lat)}`;
    const tw = tip.offsetWidth; tip.style.left = Math.min(Math.max(x + 12, 4), pw.clientWidth - tw - 4) + 'px';
    pins.cur.ll = [s.lon, s.lat]; dirty = true; });
  pc.addEventListener('pointerleave', () => { prof.hover = -1; tip.hidden = true; pins.cur.ll = null; drawProfile(); dirty = true; });
  function closeProfile() { $('profile').hidden = true; app.classList.remove('has-profile'); prof.S = null; prof.A = prof.B = null; pins.A.ll = pins.B.ll = pins.cur.ll = null; setProfLine(null); setPick(false); }
  $('profClose').addEventListener('click', closeProfile);
  const PROFILES = [
    { name: '32°N 横穿三级阶梯', A: [79.6, 32], B: [123, 32] },
    { name: '40°N 东西', A: [75.5, 40], B: [124.5, 40] },
    { name: '88°E 南北', A: [88, 27.4], B: [88, 48.8] },
    { name: '105°E 南北', A: [105, 22.8], B: [105, 42.3] },
  ];
  function runProfile(A, B, fly) { prof.A = A; prof.B = B; pins.A.ll = A; pins.B.ll = B; setProfLine(A, B); setPick(false); buildProfile();
    if (fly) { const mid = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2], len = Math.hypot((B[0] - A[0]) * Math.cos(mid[1] * D2R), B[1] - A[1]) * 1.11;
      const vertical = Math.abs(B[1] - A[1]) > Math.abs(B[0] - A[0]);
      flyTo({ lon: mid[0], lat: mid[1] - (vertical ? 0 : 1.5), w: len * 1.15, polar: 56, az: vertical ? 70 : 0 }); } }

  /* ---------- pointer interaction ---------- */
  let down = null, hoverEvt = null;
  canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; });
  canvas.addEventListener('pointerup', e => { if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 6 && e.button === 0) onClick(e); down = null; });
  canvas.addEventListener('pointermove', e => { hoverEvt = e; });
  function onClick(e) {
    const p = pickAt(e.clientX, e.clientY); if (!p) return; if (!prof.mode) { showReadout(p); return; }
    if (!prof.A) { prof.A = [p.lon, p.lat]; pins.A.ll = prof.A; setPick(true); dirty = true; }
    else runProfile(prof.A, [p.lon, p.lat], false);
  }
  function handleHover() {
    if (!hoverEvt) return; const e = hoverEvt; hoverEvt = null; if (down && e.buttons) return;
    const p = pickAt(e.clientX, e.clientY); if (!p) return; showReadout(p);
    if (prof.mode && prof.A && !prof.B) { setProfLine(prof.A, [p.lon, p.lat]); }
  }

  /* ---------- legend ---------- */
  const lgc = $('legendCanvas');
  function drawLegend() {
    const dpr = Math.min(devicePixelRatio || 1, 2), W = 124, Hh = 214; lgc.width = W * dpr; lgc.height = Hh * dpr; lgc.style.width = W + 'px'; lgc.style.height = Hh + 'px';
    const c = lgc.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, Hh);
    const TH = [0, 200, 500, 1000, 2000, 3000, 4000, 5000], bw = 16, bh = 17, top = 4, n = TH.length;
    const ink2 = cssVar('--ink-2'); c.font = `11px ${cssVar('--f-mono')}`; c.textBaseline = 'middle'; c.fillStyle = ink2;
    for (let i = 0; i < n; i++) { const y0 = top + (n - 1 - i) * bh, lo = TH[i], hi = TH[i + 1] ?? 6200;
      for (let yy = 0; yy < bh; yy++) { const h = hi - (hi - lo) * (yy + 0.5) / bh; c.fillStyle = rgbStr(colorAt(SCHEMES[state.scheme].discrete ? lo : h)); c.fillRect(0, y0 + yy, bw, 1); } }
    c.fillStyle = ink2; for (let i = 0; i < n; i++) { const y = top + (n - i) * bh; c.fillText(TH[i].toLocaleString('zh-CN'), bw + 7, y); }
    const wy = top + n * bh + 16; c.font = `600 10.5px ${cssVar('--f-sans')}`; c.fillStyle = cssVar('--muted'); c.fillText('水域', 0, wy);
    for (let x = 0; x < 64; x++) { c.fillStyle = rgbStr(waterAt(x / 63 * 6500)); c.fillRect(x, wy + 10, 1, 12); }
    c.font = `10.5px ${cssVar('--f-mono')}`; c.fillStyle = ink2; c.fillText('浅', 68, wy + 16); c.fillText('深', 100, wy + 16);
    c.fillStyle = LAKE; c.fillRect(0, wy + 30, 16, 10); c.fillStyle = ink2; c.font = `11px ${cssVar('--f-sans')}`; c.fillText('湖泊', 23, wy + 35);
  }

  /* ---------- UI wiring ---------- */
  const viewsBox = $('views');
  VIEWS.forEach(v => { const b = document.createElement('button'); b.className = 'chip'; b.textContent = v.name; b.addEventListener('click', () => { flyTo(v); if (isNarrow()) closePanel(); }); viewsBox.appendChild(b); });
  $('autoRotate').addEventListener('change', e => { controls.autoRotate = e.target.checked; dirty = true; });
  let terrainQueued = false; const queueTerrain = () => { if (!terrainQueued) { terrainQueued = true; requestAnimationFrame(() => { terrainQueued = false; updateTerrain(); }); } };
  $('exag').addEventListener('input', e => { state.exag = +e.target.value; $('exagOut').textContent = state.exag + '×'; $('exagTag').textContent = state.exag + '×'; queueTerrain(); });
  function seg(box, opts, cur, onPick) { box.innerHTML = ''; opts.forEach(([val, label]) => { const b = document.createElement('button'); b.textContent = label; b.setAttribute('aria-pressed', String(val === cur));
    b.addEventListener('click', () => { [...box.children].forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true'); onPick(val); }); box.appendChild(b); }); }
  seg($('scheme'), Object.entries(SCHEMES).map(([k, s]) => [k, s.name]), state.scheme, v => { state.scheme = v; buildLut(); drawLegend(); drawProfile(); dirty = true; });
  seg($('contour'), [[0, '关'], [200, '200 m'], [500, '500 m'], [1000, '1000 m']], 0, v => { state.contour = v; mat.uniforms.uContour.value = v; dirty = true; });
  $('shade').addEventListener('input', e => { state.shade = e.target.value / 100; $('shadeOut').textContent = e.target.value + '%'; mat.uniforms.uShade.value = state.shade; dirty = true; });
  $('dim').addEventListener('change', e => { state.dim = e.target.checked; mat.uniforms.uDim.value = state.dim ? 1 : 0; dirty = true; });
  $('bathy').addEventListener('change', e => { state.bathy = e.target.checked; queueTerrain(); });
  const seaFromSlider = v => { if (v < 100) return -150 * (100 - v) / 100; const m = 6000 * Math.pow((v - 100) / 900, 2.2); return m < 100 ? Math.round(m / 5) * 5 : m < 1000 ? Math.round(m / 10) * 10 : Math.round(m / 50) * 50; };
  const sliderFromSea = m => m < 0 ? 100 + m / 150 * 100 : 100 + 900 * Math.pow(m / 6000, 1 / 2.2);
  const seaTxt = m => (m > 0 ? '+' : m < 0 ? '−' : '') + Math.abs(Math.round(m)).toLocaleString('zh-CN') + ' m';
  function setSea(m, fromSlider) { state.sea = m; $('seaOut').textContent = seaTxt(m); if (!fromSlider) $('sea').value = Math.round(sliderFromSea(m));
    computeWet(m); queueTerrain(); if (prof.S) { buildProfile(); } }
  $('sea').addEventListener('input', e => { let m = seaFromSlider(+e.target.value); if (m > -150 && m < 0) m = Math.round(m / 5) * 5; setSea(m, true); });
  const seaBox = $('seaPresets');
  [[-120, '末次冰期 −120 m'], [0, '现今 0 m'], [100, '+100 m'], [1000, '+1000 m'], [3000, '+3000 m']].forEach(([m, t]) => {
    const b = document.createElement('button'); b.className = 'chip sm'; b.textContent = t; b.addEventListener('click', () => setSea(m, false)); seaBox.appendChild(b); });
  const LAYERS = [
    ['admin', '国界与省级界线', { sw: '#7B2143' }], ['rivers', '河流与湖泊', { sw: '#1D6AAE' }], ['regions', '地形区名称', { txt: '原', c: 'var(--l-land)' }],
    ['mountains', '山脉与山峰', { txt: '山', c: 'var(--l-mtn)' }], ['seas', '海洋与海峡', { txt: '海', c: 'var(--l-water)' }], ['cities', '省级行政中心', { txt: '●', c: 'var(--l-city)' }],
    ['steps', '三级阶梯分界线', { sw: '#E0561F', dash: true }], ['qinhuai', '秦岭—淮河线', { sw: '#16875A', dash: true }], ['hu', '胡焕庸线', { sw: '#6A3FB5', dash: true }]];
  const layersBox = $('layers');
  LAYERS.forEach(([id, name, o]) => { const lab = document.createElement('label'); lab.className = 'layer';
    const sw = o.sw ? `<span class="sw${o.dash ? ' dash' : ''}" style="color:${o.sw}"></span>` : `<span class="sw txt" style="color:${o.c}">${o.txt}</span>`;
    lab.innerHTML = `<input type="checkbox" id="lyr-${id}"${state.layers[id] ? ' checked' : ''}><span>${name}</span>${sw}`;
    lab.querySelector('input').addEventListener('change', e => { state.layers[id] = e.target.checked; applyLayerVis(); if (e.target.checked && LINE_INFO[id]) showLineInfo(id); if (prof.S) buildProfile(); });
    layersBox.appendChild(lab); });
  const ppBox = $('profPresets');
  PROFILES.forEach(p => { const b = document.createElement('button'); b.className = 'chip sm'; b.textContent = p.name; b.addEventListener('click', () => { runProfile(p.A, p.B, true); if (isNarrow()) closePanel(); }); ppBox.appendChild(b); });
  function openPanel() { panelEl.hidden = false; fab.hidden = true; app.classList.remove('panel-closed'); resize(); }
  function closePanel() { panelEl.hidden = true; fab.hidden = false; app.classList.add('panel-closed'); resize(); }
  $('btnCollapse').addEventListener('click', closePanel); fab.addEventListener('click', openPanel);
  $('btnFull').addEventListener('click', () => { try { if (document.fullscreenElement) document.exitFullscreen(); else { const r = app.requestFullscreen && app.requestFullscreen(); if (r && r.catch) r.catch(() => {}); } } catch (e) {} });

  /* ---------- theme ---------- */
  function applyTheme() { mat.uniforms.uDimTint.value = v3(cssVar('--dim-tint') || '#EEF1ED'); mat.uniforms.uDimMix.value = parseFloat(cssVar('--dim-amt')) || 0.58;
    if (prof.line) prof.line.mat.color.set(cssVar('--vermilion')); drawLegend(); drawProfile(); dirty = true; }
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  /* ---------- start ---------- */
  computeWet(0); updateTerrain(); applyLayerVis(); applyTheme();
  if (isNarrow()) closePanel();
  new ResizeObserver(resize).observe(app); resize(); measure();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); drawLegend(); });
  anim = null; { const v = VIEWS[0]; const [x, z] = toXZ(v.lon, v.lat); controls.target.set(x, 0.1, z);
    camera.position.setFromSpherical(new THREE.Spherical(viewDist(v) * 1.35, 30 * D2R, -8 * D2R)).add(controls.target); camera.lookAt(controls.target); flyTo(v, 2200); }

  const lastM = new THREE.Matrix4();
  function frame(now) {
    const a = stepAnim(now); const moved = controls.update();
    handleHover();
    camera.updateMatrixWorld();
    if (a || moved || dirty || !lastM.equals(camera.matrixWorld)) { renderer.render(scene, camera); updateLabels(); lastM.copy(camera.matrixWorld); dirty = false; }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  window.__terrainReady = true;
  $('loading').remove();
}
main().catch(err => { console.error(err); const l = document.getElementById('loading'); if (l) l.innerHTML = '<div>地形生成失败<small>' + (err && err.message ? err.message : err) + '</small></div>'; });
