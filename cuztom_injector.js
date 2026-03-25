const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Identity & Logistics
html = html.replace(/\[COMPANY NAME LLC\]/g, 'Cuztom Workz');
html = html.replace(/\[COMPANY NAME\]/g, 'Cuztom Workz');
html = html.replace(/\[CITY, STATE\]/g, 'Fresno, CA');
html = html.replace(/\[CITY\]/g, 'Fresno');
html = html.replace(/\[PHONE NUMBER\]/g, '(559) 722-0902');
html = html.replace(/\[CONTACT EMAIL\]/g, 'info@cuztomworkz.net');

// Media & Socials
html = html.replace(/\[INSTAGRAM_URL\]/g, 'https://www.instagram.com/cuztom_workz/');
html = html.replace(/@\[SOCIAL_HANDLE\]/g, '@cuztom_workz');
html = html.replace(/\[(YOUTUBE_URL|TIKTOK_URL|FACEBOOK_URL)\]/g, 'https://www.instagram.com/cuztom_workz/');

// Services
html = html.replace(/\[SERVICE 1 NAME\]/g, 'Vinyl Wraps');
html = html.replace(/\[SERVICE 2 NAME\]/g, 'Paint Services');
html = html.replace(/\[SERVICE 3 NAME\]/g, 'Aftermarket Parts');
html = html.replace(/\[SERVICE 4 NAME\]/g, 'Engine Work');
html = html.replace(/\[SERVICE 5 NAME\]/g, 'Lowering & Lifting');
html = html.replace(/\[SERVICE 6 NAME\]/g, 'Wheels & Tires');
html = html.replace(/\[SERVICE 7 NAME\]/g, 'Body Kit Install');

// We also need to update Form Dropdowns (originally Car Wrap, Starlight Headliner, etc.)
// Assuming they correspond to the service names or still have original string in the array.
html = html.replace(/'wrap': 'Car Wrap'/g, "'wrap': 'Vinyl Wraps'");
html = html.replace(/'starlight': 'Starlight Headliner'/g, "'paint': 'Paint Services'");
html = html.replace(/'chrome': 'Chrome Delete'/g, "'engine': 'Engine Work'");
html = html.replace(/'ambient': 'Ambient Lighting'/g, "'suspension': 'Lowering & Lifting'");

// Update HTML `<option>` or `data-service=` if they exist in the UI for the form
html = html.replace(/data-service="wrap"/g, 'data-service="wrap"');
html = html.replace(/data-service="starlight"/g, 'data-service="paint"');
html = html.replace(/data-service="chrome"/g, 'data-service="engine"');
html = html.replace(/data-service="ambient"/g, 'data-service="suspension"');

html = html.replace(/>Starlight Headliner</g, '>Paint Services<');
html = html.replace(/>Chrome Delete</g, '>Engine Work<');
html = html.replace(/>Ambient Lighting</g, '>Lowering & Lifting<');

// Changing the aesthetics to Red/Orange Auto Shop theme instead of original Blue
html = html.replace(/blue-600/g, 'red-600');
html = html.replace(/blue-500/g, 'red-500');
html = html.replace(/blue-400/g, 'red-400');
// Hex/RGB swaps for shadow and raw CSS
html = html.replace(/#2563eb/gi, '#dc2626'); // red-600
html = html.replace(/#3b82f6/gi, '#ef4444'); // red-500
html = html.replace(/#60a5fa/gi, '#f87171'); // red-400
html = html.replace(/59,\s*130,\s*246/g, '239, 68, 68'); // rgba text
html = html.replace(/37,\s*99,\s*235/g, '220, 38, 38');  // rgba shadow

// Reviews
html = html.replace(/\[CLIENT NAME 1\]/g, 'Mike R.');
html = html.replace(/\[CLIENT NAME 2\]/g, 'Sarah T.');
html = html.replace(/\[CLIENT NAME 3\]/g, 'David C.');
// Light textual swaps making it specific to auto repair & parts
html = html.replace(/starlight headliners, chrome deletes, and ambient lighting/g, 'paint services, aftermarket parts, and lowering/lifting services');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Cuztom Workz Injection Complete!');
