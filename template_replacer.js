const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Company Names & Descriptions
html = html.replace(/Coronas Customz LLC/gi, '[COMPANY NAME LLC]');
html = html.replace(/Coronas Customz/gi, '[COMPANY NAME]');
html = html.replace(/Coronas/gi, '[COMPANY NAME]');

// 2. Specific locations
html = html.replace(/Fresno, CA/gi, '[CITY, STATE]');
html = html.replace(/Fresno/gi, '[CITY]');

// 3. Contact Info
html = html.replace(/\(?559\)?[-.\s]?513[-.\s]?5505/g, '[PHONE NUMBER]');
html = html.replace(/559-513-5505/g, '[PHONE NUMBER]');
html = html.replace(/coronascustomz@gmail\.com/gi, '[CONTACT EMAIL]');

// 4. Social Links
html = html.replace(/@coronascustomz/gi, '@[SOCIAL_HANDLE]');
html = html.replace(/https:\/\/www\.instagram\.com\/coronascustomz/gi, '[INSTAGRAM_URL]');
html = html.replace(/https:\/\/www\.tiktok\.com\/@coronascustomz/gi, '[TIKTOK_URL]');
html = html.replace(/https:\/\/www\.youtube\.com\/@coronascustomz/gi, '[YOUTUBE_URL]');
html = html.replace(/https:\/\/www\.facebook\.com\/CoronasCustomz/gi, '[FACEBOOK_URL]');

// 5. Image Sources - standard images in the folder
html = html.replace(/logo\.png/gi, '[LOGO_URL]');
html = html.replace(/hero-car\.png/gi, '[HERO_IMAGE_URL]');
html = html.replace(/hero-shop\.jpg/gi, '[BACKGROUND_HERO_URL]');
html = html.replace(/ambient-lighting\.png/gi, '[SERVICE_IMG_1_URL]');
html = html.replace(/car-wrap\.png/gi, '[SERVICE_IMG_2_URL]');
html = html.replace(/chrome-delete\.png/gi, '[SERVICE_IMG_3_URL]');
html = html.replace(/starlight-headliner\.png/gi, '[SERVICE_IMG_4_URL]');
html = html.replace(/Left\.img\.jpg/gi, '[SLIDER_LEFT_IMG_URL]');
html = html.replace(/right\.img\.jpg/gi, '[SLIDER_RIGHT_IMG_URL]');
html = html.replace(/gallery-before\.jpg/gi, '[BEFORE_IMG_URL]');
html = html.replace(/gallery-after\.jpg/gi, '[AFTER_IMG_URL]');

// 6. Generic Service Text Placeholders (only if needed, but user said "as in logo, services, pictures")
// Wait, replacing all service text specifically could break structure if they have different descriptions.
// Let's replace the common service headings
html = html.replace(/>Car Wraps</g, '>[SERVICE 1 NAME]<');
html = html.replace(/>Window Tint</g, '>[SERVICE 2 NAME]<');
html = html.replace(/>Starlight Headliners?</g, '>[SERVICE 3 NAME]<');
html = html.replace(/>Chrome Delete</g, '>[SERVICE 4 NAME]<');
html = html.replace(/>Ambient Lighting</g, '>[SERVICE 5 NAME]<');
html = html.replace(/>Paint Protection Film</g, '>[SERVICE 6 NAME]<');
html = html.replace(/>Powder Coating</g, '>[SERVICE 7 NAME]<');

// 7. Testimonials (optional but good for template)
html = html.replace(/Marcus T\./g, '[CLIENT NAME 1]');
html = html.replace(/Sarah M\./g, '[CLIENT NAME 2]');
html = html.replace(/David L\./g, '[CLIENT NAME 3]');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Template replacements successful!');
