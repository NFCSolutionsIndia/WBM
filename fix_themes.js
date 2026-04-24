const fs = require('fs');
const path = require('path');

const dirs = ['about', 'case-studies', 'contact', 'data-centers', 'industries', 'materials', 'partners', 'process', 'sustainability', 'technology'];

dirs.forEach(dir => {
  const filePath = path.join('src/app', dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace standard colors
    content = content.replace(/bg-\[#0d1a14\]/g, 'bg-[var(--c-bg)]');
    content = content.replace(/bg-\[#0a140f\]/g, 'bg-[var(--c-bg2)]');
    content = content.replace(/text-white/g, 'text-[var(--c-fg)]');
    content = content.replace(/text-gray-400/g, 'text-[var(--c-fg2)]');
    content = content.replace(/text-gray-300/g, 'text-[var(--c-fg2)]');
    content = content.replace(/text-\[#C1FF00\]/g, 'text-[var(--c-lime)]');
    content = content.replace(/border-white\/10/g, 'border-[var(--c-border)]');
    content = content.replace(/bg-white\/5/g, 'bg-[var(--c-glass)]');
    content = content.replace(/bg-gray-800\/50/g, 'bg-[var(--c-bg3)]');
    
    // Some pages might not have [#0d1a14], they might have other hardcoded classes like bg-black or similar.
    content = content.replace(/bg-black/g, 'bg-[var(--c-bg)]');
    content = content.replace(/bg-neutral-900/g, 'bg-[var(--c-bg2)]');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});
