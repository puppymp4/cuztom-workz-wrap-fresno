const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// --- 1. FONTS & THEME ---
// Swap Bodoni/Inter for Russo One/Montserrat
html = html.replace(/family=Inter:wght@300;400;500;700&family=Bodoni\+Moda:ital,opsz,wght@0,6\.\.96,400;1,6\.\.96,400/g, 'family=Montserrat:ital,wght@0,300..900;1,300..900&family=Russo+One');
html = html.replace(/'Inter', sans-serif/g, "'Montserrat', sans-serif");
html = html.replace(/'Bodoni Moda', serif/g, "'Russo One', sans-serif");
// Add silver gradient class for vibe
html = html.replace(/\.font-serif \{/g, ".font-serif {\n            font-family: 'Russo One', sans-serif;\n        }\n        .text-silver {\n            background: linear-gradient(to bottom right, #e5e7eb, #9ca3af, #d1d5db);\n            -webkit-background-clip: text;\n            color: transparent;\n        }\n        .old-serif-dummy {");

// --- 2. HERO COPY ---
html = html.replace(/Fresno's Favorite Custom Shop/g, 'Fresno\'s Premier Auto Performance & Customs');
html = html.replace(/REDEFINING <br \/>/g, 'UNLEASH THE <span class="italic font-serif text-silver">BEAST</span><br />');
html = html.replace(/YOUR <span class="italic font-serif">RIDE\.<\/span><br \/>/g, 'WITHIN YOUR <span class="italic font-serif text-red-500">RIDE.</span><br />');
html = html.replace(/<span style="font-size:0\.55em; color:rgba\(255,255,255,0\.5\);">Inside and Out\.<\/span>/g, '<span style="font-size:0.55em; color:rgba(255,255,255,0.5);">Performance & Customization.</span>');
html = html.replace(/Car wraps, paint services, aftermarket parts, and lowering\/lifting services for any car\. From daily\s*drivers to show cars — we treat every ride like our own\./g, 'Welcome to Cuztom Workz! Your trusted auto shop in Fresno. From essential engine work and repairs to head-turning vinyl wraps and custom lifting, we bring your vision to life. Get a free, no-pressure quote today!');

// --- 3. SUB-HEADERS ---
html = html.replace(/MAKE YOUR CAR <br \/>/g, 'ELEVATE YOUR <br />');
html = html.replace(/<span class="italic font-serif">YOURS<\/span>/g, '<span class="italic font-serif text-silver">PERFORMANCE</span>');
html = html.replace(/Whether you drive a Honda Civic or a Corvette, we'll make it look exactly the way you want\s*it\. Quality work on every car that rolls through our doors\./g, 'Whether you need routine maintenance, a full custom build, or performance parts installed, our expert mechanics have you covered under one roof.');

// --- 4. SERVICES BLOCKS (TITLES AND DESCRIPTIONS) ---
// Block 1: Vinyl Wraps (already title Vinyl Wraps)
html = html.replace(/Full and partial vinyl wraps to completely change the look of your car\. We use\s*quality films so it looks clean and lasts\./g, 'Transform your vehicle\'s look and protect its original paint with our premium vinyl wraps. Endless color options available.');

// Block 2: Aftermarket Parts
html = html.replace(/>Aftermarket Parts<\/h3>/g, '>Aftermarket Parts</h3>');
html = html.replace(/Fiber optic star ceilings you can control from your phone\. Multiple colors and\s*settings — everyone who sees it wants one\./g, 'Upgrade your ride\'s performance. We source and meticulously install high-quality aftermarket parts for all makes and models.');

// Block 3: Chrome Deletes (Needs to be Engine Work)
html = html.replace(/>Chrome Deletes<\/h3>/g, '>Engine Work & Repair</h3>');
html = html.replace(/Black out your chrome trim for a clean, blacked-out look\. Window trim, badges,\s*handles — it all gets the stealth treatment\./g, 'From routine maintenance check-ups to full engine rebuilds, our certified mechanics ensure your car runs at absolute peak performance.');

// Block 4: Lowering & Lifting
html = html.replace(/>Ambient Lighting<\/h3>/g, '>Lowering & Lifting</h3>'); // If it wasn't replaced
html = html.replace(/Custom LED lighting along your doors, dash, and footwells\. Clean install that looks\s*factory — and incredible at night\./g, 'Stand out from the crowd. We install professional lift kits for trucks and lowering springs/coilovers for an aggressive street stance.');

// --- 5. REVIEWS ENHANCEMENT ---
// Make testimonials more relevant to mechanic/auto-shop
html = html.replace(/They completely transformed my car\. The attention to detail is insane and the wrap looks like real paint\./g, 'Best mechanic and custom shop in Fresno. They installed my coilovers and tuned my engine perfectly. The car drives like it\'s on rails now.');
html = html.replace(/Best decision I made for my interior\. The starlight ceiling gets compliments every single time someone gets in my car\./g, 'Got a full vinyl wrap and some aftermarket parts installed here. The crew is super friendly, inviting, and they got the job done fast without cutting corners.');
html = html.replace(/Super professional and clean work\. The chrome delete changed the entire aggressive look of my truck\. Highly recommend\./g, 'If you need engine work or just basic repairs, this is the place. Honest pricing, incredible attention to detail, and a highly skilled team.');

// Write back to file
fs.writeFileSync(filePath, html, 'utf8');
console.log('Vibe and Copy update successful!');
