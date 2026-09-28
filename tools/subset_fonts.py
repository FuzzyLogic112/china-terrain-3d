"""Subset Noto Serif CJK SC to the characters used by labels and headings.

The page sets place names, headings and card titles in a serif face. Shipping the
full CJK font would be ~20 MB, so we keep only the glyphs those strings use.
Usage: python3 tools/subset_fonts.py /path/to/NotoSerifCJK-SemiBold.ttc
"""
import re, sys, pathlib
from fontTools.ttLib import TTCollection
from fontTools import subset

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / 'src/main.js').read_text(encoding='utf-8')
html = (ROOT / 'index.html').read_text(encoding='utf-8') if (ROOT / 'index.html').exists() else ''

CJK = re.compile(r'[　-〿一-鿿＀-￯—Ⅰ-ⅿ]')
chars = set()
# short string literals in the script = names and short UI labels (long ones are sans-serif body text)
for lit in re.findall(r"'([^'\n]{1,16})'", src):
    if CJK.search(lit): chars |= set(lit)
# serif headings in the HTML shell
for extra in ['中国三维地势图', '工具与图层', '地形剖面', '正在生成三维地形', '地形生成失败', '三维渲染库未能加载',
              '地势的三级阶梯', '秦岭—淮河线', '胡焕庸线', '原山海']:
    chars |= set(extra)
chars |= set(chr(c) for c in range(0x20, 0x7f))
chars |= set('·—–−°×→（）、，。：；“”')
text = ''.join(sorted(chars))
print('glyph count', len(text))

ttc = TTCollection(sys.argv[1])
font = next(f for f in ttc.fonts if any('Serif CJK SC' in str(n) for n in f['name'].names))
opts = subset.Options(); opts.flavor = 'woff2'; opts.layout_features = ['*']; opts.name_IDs = ['*']; opts.hinting = False; opts.desubroutinize = True
sub = subset.Subsetter(opts); sub.populate(text=text); sub.subset(font)
out = ROOT / 'assets/fonts/noto-serif-sc-subset.woff2'
font.flavor = 'woff2'; font.save(str(out))
print(out.name, out.stat().st_size // 1024, 'KB')
