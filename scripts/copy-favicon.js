const fs = require('fs');
const path = require('path');

function copyFavicon() {
  const projectRoot = path.resolve(__dirname, '..');
  const src = path.join(projectRoot, 'src', 'assets', 'logor.png');
  const publicDir = path.join(projectRoot, 'public');
  const buildDir = path.join(projectRoot, 'build');

  // Ensure public dir exists
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

  // Copy to public/favicon.ico (keep .ico extension though source is png)
  const publicFavicon = path.join(publicDir, 'favicon.ico');
  try {
    fs.copyFileSync(src, publicFavicon);
    console.log('Copied favicon to', publicFavicon);
  } catch (err) {
    console.error('Failed to copy favicon to public:', err.message);
  }

  // Also copy into build root if build exists
  if (fs.existsSync(buildDir)) {
    const buildFavicon = path.join(buildDir, 'favicon.ico');
    try {
      fs.copyFileSync(src, buildFavicon);
      console.log('Copied favicon to', buildFavicon);
    } catch (err) {
      console.error('Failed to copy favicon to build:', err.message);
    }
  }
}

copyFavicon();
