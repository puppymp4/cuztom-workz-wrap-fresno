const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// --- 1. HEADING TEXT & RESPONSIVE FONT SIZING ---
// Original: UNLEASH THE <span class="italic font-serif text-silver">BEAST</span><br /> WITHIN YOUR <span class="italic font-serif text-red-500">RIDE.</span><br />
html = html.replace(/UNLEASH THE <span class="italic font-serif text-silver">BEAST<\/span><br \/>\s*WITHIN YOUR <span class="italic font-serif text-red-500">RIDE\.<\/span><br \/>/g, 'Built by Enthusiasts,<br /><span class="font-serif text-silver" style="padding-right:10px;">Trusted by the</span> <span class="font-serif text-red-500">Community.</span><br />');

// Reduce font sizes that might be cutting off 't' or just being too massive
// text-6xl md:text-8xl lg:text-9xl -> text-4xl md:text-6xl lg:text-7xl
html = html.replace(/text-6xl md:text-8xl lg:text-9xl/g, 'text-4xl md:text-6xl lg:text-7xl');
html = html.replace(/lg:text-9xl/g, 'lg:text-7xl');
html = html.replace(/md:text-8xl/g, 'md:text-7xl');

// --- 2. BRIGHTENING THE VIBE (POPPING CONTRAST WITHOUT LOSING THE DARK THEME) ---
// Overall Background
html = html.replace(/background-color:\s*#050505/g, 'background-color: #111111');
html = html.replace(/#050505/g, '#111111');

// Base readable text
html = html.replace(/rgba\(255,\s*255,\s*255,\s*0\.6\)/g, 'rgba(255,255,255,0.85)');
html = html.replace(/text-white\/60/g, 'text-white/80');

// Hero background gradient overlay - lighten it drastically
html = html.replace(/linear-gradient\(to bottom, rgba\(0,0,0,0\.8\), rgba\(0,0,0,0\.5\), #050505\)/g, 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1), #111111)');
html = html.replace(/opacity:0\.85/g, 'opacity:0.95');

// Glass Cards - Make them pop more so the site isn't so muddy
html = html.replace(/rgba\(255, 255, 255, 0\.03\)/g, 'rgba(255, 255, 255, 0.08)');
html = html.replace(/border: 1px solid rgba\(255, 255, 255, 0\.05\)/g, 'border: 1px solid rgba(255, 255, 255, 0.15)');

// Card image gradients
html = html.replace(/linear-gradient\(to top, rgba\(0,0,0,0\.95\), rgba\(0,0,0,0\.2\), transparent\)/g, 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1), transparent)');

// Card image opacity
html = html.replace(/opacity-40 group-hover:opacity-60/g, 'opacity-60 group-hover:opacity-80');

// Process/Review Card dark colors
html = html.replace(/bg-white\/5/g, 'bg-white/10');
html = html.replace(/border-white\/10/g, 'border-white/20');

// Mobile dark menu
html = html.replace(/border-white\/10/g, 'border-white/20');

// Write back to file
fs.writeFileSync(filePath, html, 'utf8');
console.log('Visibility and Heading update successful!');
