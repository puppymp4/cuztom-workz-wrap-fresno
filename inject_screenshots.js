const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// The three reviews currently in index.html
const review1Old = /"Best mechanic and custom shop in Fresno straight up\. Brought my truck in for a full suspension lift and they absolutely killed it\. The attention to detail is unmatched, and they didn't try to up-sell me on things I didn't need\. Honest, clean work!"/g;
const name1Old = /Chris Torres/g;
const tag1Old = /Suspension Lift — Chevy Silverado · Google/g;

const review2Old = /"If you need engine work, performance tuning, or basically anything aftermarket installed, look no further\. Cuztom Workz took care of my build from start to finish\. They truly treat your car like their own and their prices are super fair\. Top-notch service\."/g;
const name2Old = /Michael H\./g;
const tag2Old = /Engine Tuning & Performance — Ford Mustang · Google/g;

const review3Old = /"Man, this is the best auto customization spot in the valley! They did a full color change vinyl wrap on my car and it came out flawless\. The finish is amazing, no peeling or bubbles anywhere\. Highly skilled team and super inviting atmosphere!"/g;
const name3Old = /Daniel R\./g;
const tag3Old = /Full Vinyl Wrap — Honda Civic · Google/g;

// The pure Google Reviews from the screenshots
const review1New = `"I couldn't be happier with the wrap on my car! The team at CW Custom Workz absolutely killed it — the attention to detail, finish, and overall quality are next-level. The color looks insane in person, and the fitment is perfect all around. They treated my car with care and kept me updated through the whole process. If you're thinking about getting your car wrapped, this is the place to go. 5/5 — highly recommend these guys for their skill, professionalism, and passion for what they do!"`;
const name1New = 'Manuel Carranza';
const tag1New = '4 months ago · Google';

const review2New = `"Custom Workz has been my go-to shop for everything auto customization. I've had the privilege of witnessing their journey and it's no surprise to see what they've become, given how dedicated the owners are. They've done multiple installations on my car, including a digital cluster, headlights, custom fender liners, intercooler change, and charge pipes. Most recently, they rewrapped my damaged door panel and applied ceramic coating, both done flawlessly."`;
const name2New = 'Jayvee H';
const tag2New = '3 months ago · Google';

const review3New = `"I normally do all of the work on my car myself, but with these headlights I wanted someone professional to do it. I heard great things about Cuztom Workz, so I decided to give them a try. Needless to say, I was super pleased with their work. They went above and beyond and even got my halo fog lights working, I thought it would be impossible to get those working. The owner is a very nice guy and makes sure that you leave happy. This is my go to shop for everything now."`;
const name3New = 'Josh Rocker';
const tag3New = 'a month ago · Google';

// Apply replacements
html = html.replace(review1Old, review1New);
html = html.replace(name1Old, name1New);
html = html.replace(tag1Old, tag1New);

html = html.replace(review2Old, review2New);
html = html.replace(name2Old, name2New);
html = html.replace(tag2Old, tag2New);

html = html.replace(review3Old, review3New);
html = html.replace(name3Old, name3New);
html = html.replace(tag3Old, tag3New);

// Update review avatars to match their first initial (M, J, J)
// Currently they are C, A, M (from my script or from Coronas?)
// I'll just regex replace the avatar setup
html = html.replace(/>C<\/div>/, '>M</div>');
html = html.replace(/>A<\/div>/, '>J</div>');
html = html.replace(/>M<\/div>/, '>J</div>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Real screenshot reviews injected!');
