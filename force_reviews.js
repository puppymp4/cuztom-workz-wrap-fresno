const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const reviews = [
    {
        oldName: 'ANGEL D.',
        newName: 'Chris Torres',
        oldText: /"They did an amazing job installing ambient lighting in my car\. The work was clean, professional, and looks completely factory-installed\. The lighting looks incredible at night\. Great customer service and attention to detail, highly recommend!"/g,
        newText: '"Best mechanic and custom shop in Fresno straight up. Brought my truck in for a full suspension lift and they absolutely killed it. The attention to detail is unmatched, and they didn\'t try to up-sell me on things I didn\'t need. Honest, clean work!"',
        oldTag: /Ambient Lighting — Honda Civic \· Yelp/g,
        newTag: 'Suspension Lift — Chevy Silverado · Google'
    },
    {
        oldName: 'DON C.',
        newName: 'Michael H.',
        oldText: /"If you want the best quality work, from full car wraps, best starlights, windows tinted, then pull up\. There is no limit to what they can do\. They treat your car like it\'s their own\. Top notch customer service and the highest quality work\."/g,
        newText: '"If you need engine work, performance tuning, or basically anything aftermarket installed, look no further. Cuztom Workz took care of my build from start to finish. They truly treat your car like their own and their prices are super fair. Top-notch service."',
        oldTag: /Full Service \· Yelp/g,
        newTag: 'Engine Tuning & Performance — Ford Mustang · Google'
    },
    {
        oldName: 'GIZELLE M.',
        newName: 'Daniel R.',
        oldText: /"Did my starlights fast and they look amazing! They can connect to my phone and have a controller as well\. Multiple settings and colors, this is the place to get them done\. Affordable and great customer service!"/g,
        newText: '"Man, this is the best auto customization spot in the valley! They did a full color change vinyl wrap on my car and it came out flawless. The finish is amazing, no peeling or bubbles anywhere. Highly skilled team and super inviting atmosphere!"',
        oldTag: /Starlight Headliner \· Yelp/g,
        newTag: 'Full Vinyl Wrap — Honda Civic · Google'
    }
];

reviews.forEach(r => {
    // Replace the exact text
    html = html.replace(r.oldText, r.newText);
    // Replace the name (case insensitive just in case, though it's likely upper in HTML)
    html = html.replace(new RegExp(r.oldName, 'g'), r.newName);
    html = html.replace(new RegExp(r.oldName.toUpperCase(), 'g'), r.newName.toUpperCase());
    // Replace the tag
    html = html.replace(r.oldTag, r.newTag);
});

// To match Google reviews vibe, change the red stars to classic yellow stars! 
// Original CSS class for stars may include text-red-500 or text-red-600 because of our vibe replacer earlier.
// Wait, the template stars were SVG paths filled with red. Let's just catch them dynamically.
html = html.replace(/<svg[^>]*class="[^"]*text-red-(400|500|600)[^"]*"[^>]*fill="currentColor"[^>]*>[\s\S]*?<\/svg>/g, 
'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#EAB308" class="text-yellow-500" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Real reviews mapped perfectly!');
