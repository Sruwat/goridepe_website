const path = require('path');
const fs = require('fs');
const Jimp = require('jimp');
const toIco = require('to-ico');

async function generate() {
  const projectRoot = path.resolve(__dirname, '..');
  const src = path.join(projectRoot, 'src', 'assets', 'logor.png');
  const tmpDir = path.join(projectRoot, '.tmp-favicon');
  const publicDir = path.join(projectRoot, 'public');
  const buildDir = path.join(projectRoot, 'build');

  if (!fs.existsSync(src)) {
    console.error('Source logo not found at', src);
    process.exit(1);
  }

  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

  const sizes = [16, 32, 48];
  const pngPaths = [];
  for (const size of sizes) {
    const img = await Jimp.read(src);
    img.contain(size, size, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
    const out = path.join(tmpDir, `favicon-${size}.png`);
    await img.writeAsync(out);
    pngPaths.push(out);
    console.log('Generated', out);
  }

  // create ICO from PNG buffers (avoid path issues on Windows)
  const pngBuffers = [];
  for (const p of pngPaths) {
    const b = fs.readFileSync(p);
    pngBuffers.push(b);
  }
  const icoBuffer = await toIco(pngBuffers);
  const outIco = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(outIco, icoBuffer);
  console.log('Wrote', outIco);

  // also copy to build if exists
  if (fs.existsSync(buildDir)) {
    const buildIco = path.join(buildDir, 'favicon.ico');
    fs.writeFileSync(buildIco, icoBuffer);
    console.log('Wrote', buildIco);
  }

  // cleanup
  try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
}

generate().catch(e => {
  console.error(e);
  process.exit(1);
});
