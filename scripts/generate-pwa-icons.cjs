#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create a simple colored square PNG icon using Canvas API simulation
function createSimplePNG(size, color = '#2563eb') {
  // This creates a very basic PNG data for a colored square
  // In a real scenario, you'd use a proper image library like sharp or canvas
  
  const width = size;
  const height = size;
  
  // Create a simple SVG that can be converted later
  const svgContent = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" rx="20"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.floor(size/8)}" 
        fill="white" text-anchor="middle" dy=".3em" font-weight="bold">S</text>
</svg>`.trim();

  return svgContent;
}

// Create icons directory
const iconsDir = path.join(process.cwd(), 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate different sizes
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

console.log('Generating PWA icons...');

sizes.forEach(size => {
  const svgContent = createSimplePNG(size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join(iconsDir, filename);
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`Created: ${filename}`);
});

// Create a main icon.png (using 192 size)
const mainIconSvg = createSimplePNG(192);
fs.writeFileSync(path.join(iconsDir, 'icon-192x192.svg'), mainIconSvg);

console.log('\nIcons generated successfully!');
console.log('Note: These are SVG placeholders. For production, convert to PNG using:');
console.log('  npm install -g svg2png-many');
console.log('  or use online converter tools');