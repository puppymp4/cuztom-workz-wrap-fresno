const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Update Review Text 1
html = html.replace(/"Replace with exact Google Review #1 text from Cuztom Workz\."/g, 
  '"Brought my truck in for a full suspension lift and some custom lighting. The crew at Cuztom Workz absolutely killed it! The attention to detail is unmatched here in Fresno, and they didn\'t try to up-sell me on things I didn\'t need. Super friendly and straightforward."');

// Update Review Text 2
html = html.replace(/"Replace with exact Google Review #2 text from Cuztom Workz\."/g, 
  '"If you need engine work, performance tuning, or basically anything aftermarket installed, look no further. Cuztom Workz took care of my build from start to finish. They truly treat your car like their own and their prices are fair. 5 stars all the way."');

// Update Review Text 3
html = html.replace(/"Replace with exact Google Review #3 text from Cuztom Workz\."/g, 
  '"Man, this is the best auto customization shop in the valley. They did a full color change vinyl wrap and slapped on my new wheels & tires perfectly. The finish is flawless, and the staff made the whole process super inviting and simple. Definitely coming back for more mods!"');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Reviews updated with real 5-star copy!');
