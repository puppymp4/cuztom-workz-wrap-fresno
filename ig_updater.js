const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Remove Starlights
// The JS logic
html = html.replace(/\/\/ 1\. Generate Ambient Background[\s\S]*?starsContainer\.appendChild\(star\);\n\s*\}/g, '');
// The HTML div
html = html.replace(/<div id="starlight-bg" class="stars-container"><\/div>/g, '');

// 2. Change Reviews to Look Like Google Reviews and prep placeholder structure for the user
const googleReviewSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>`;

const starsHTML = `<div class="flex text-yellow-400 mb-2">★★★★★</div>`;

// Update Testimonial 1
html = html.replace(/<div class="flex items-center gap-4 mb-6">([\s\S]*?)<h4 class="text-xl font-bold">Mike R\.<\/h4>([\s\S]*?)<\/div>([\s\S]*?)Best mechanic and custom shop in Fresno\.[^<]+<\/p>/gi, 
  `<div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">C</div>
        <div>
            <h4 class="text-lg font-bold">Google Reviewer</h4>
            <div class="flex items-center gap-1 text-xs text-white/50">Local Guide</div>
        </div>
    </div>
    ${googleReviewSVG}
  </div>
  ${starsHTML}
  <p style="color:rgba(255,255,255,0.85);" class="font-light leading-relaxed mb-6 italic hover:text-white transition-colors">
  "Replace with exact Google Review #1 text from Cuztom Workz."
  </p>`);

// Update Testimonial 2
html = html.replace(/<div class="flex items-center gap-4 mb-6">([\s\S]*?)<h4 class="text-xl font-bold">Sarah T\.<\/h4>([\s\S]*?)<\/div>([\s\S]*?)Got a full vinyl wrap[^<]+<\/p>/gi, 
  `<div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">A</div>
        <div>
            <h4 class="text-lg font-bold">Google Reviewer</h4>
            <div class="flex items-center gap-1 text-xs text-white/50">Local Guide</div>
        </div>
    </div>
    ${googleReviewSVG}
  </div>
  ${starsHTML}
  <p style="color:rgba(255,255,255,0.85);" class="font-light leading-relaxed mb-6 italic hover:text-white transition-colors">
  "Replace with exact Google Review #2 text from Cuztom Workz."
  </p>`);

// Update Testimonial 3
html = html.replace(/<div class="flex items-center gap-4 mb-6">([\s\S]*?)<h4 class="text-xl font-bold">David C\.<\/h4>([\s\S]*?)<\/div>([\s\S]*?)If you need engine work[^<]+<\/p>/gi, 
  `<div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-lg">M</div>
        <div>
            <h4 class="text-lg font-bold">Google Reviewer</h4>
            <div class="flex items-center gap-1 text-xs text-white/50">Local Guide</div>
        </div>
    </div>
    ${googleReviewSVG}
  </div>
  ${starsHTML}
  <p style="color:rgba(255,255,255,0.85);" class="font-light leading-relaxed mb-6 italic hover:text-white transition-colors">
  "Replace with exact Google Review #3 text from Cuztom Workz."
  </p>`);

// 3. Instagram Picture mapping updates (Set IMG SRC to local files so user can drop IG pics right in)
html = html.replace(/cuztom_workz_hero\.png/g, 'ig_photo.jpg');

// Ensure the hero has NO starlight/stars container and is just a plain dark photo
fs.writeFileSync(filePath, html, 'utf8');
console.log('Starlights removed, Reviews shaped to Google Reviews, and IG image mapped!');
