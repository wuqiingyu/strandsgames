#!/usr/bin/env node

// Using the existing large SVG icon to create proper manifest entries
const fs = require('fs');
const path = require('path');

console.log('Creating PWA icon manifest entries...');

// Copy the main SVG icon to different names for PWA compliance
const originalSvgPath = path.join(process.cwd(), 'public', 'icons', 'icon.svg');
const iconsDir = path.join(process.cwd(), 'public', 'icons');

if (fs.existsSync(originalSvgPath)) {
  // Create additional SVG copies with specific naming for different sizes
  const sizes = [192, 512];
  
  sizes.forEach(size => {
    const targetPath = path.join(iconsDir, `icon-${size}x${size}.svg`);
    fs.copyFileSync(originalSvgPath, targetPath);
    console.log(`Created: icon-${size}x${size}.svg`);
  });
  
  console.log('\nSVG icons ready for PWA use!');
  console.log('The browser will scale these SVG icons as needed.');
} else {
  console.error('Original icon.svg not found!');
}

// Create a simple favicon if it doesn't exist
const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
if (!fs.existsSync(faviconPath)) {
  console.log('\nNote: Create a favicon.ico file for better browser compatibility');
}