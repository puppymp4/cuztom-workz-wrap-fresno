const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// The images the user provided
const heroImg = encodeURI('ig_photo.jpg/hero image.png');
const igPics = [
  'ig_photo.jpg/518057916_17874318423388316_8257729985142643765_n.jpg',
  'ig_photo.jpg/575618421_17889071976388316_1208766999225474552_n.jpg',
  'ig_photo.jpg/580177810_17889071964388316_6822185795197040647_n.jpg',
  'ig_photo.jpg/587793552_17893170834388316_3565970639576153099_n.jpg',
  'ig_photo.jpg/640330165_17903571642388316_4397121337294381908_n.jpg',
  'ig_photo.jpg/642246519_17902850463388316_21139999831462289_n.jpg'
];

let currentIndex = 0;

// Since `ig_photo.jpg` was globally replaced, we'll split and re-join to insert them in order
const parts = html.split('ig_photo.jpg');

let newHtml = parts[0];
for (let i = 1; i < parts.length; i++) {
  // The first two occurrences are usually the preload tag and the hero image.
  if (i === 1 || i === 2) {
    newHtml += heroImg + parts[i];
  } else {
    // Round-robin through the 6 IG pics for the rest of the cards
    let pic = igPics[currentIndex % igPics.length];
    currentIndex++;
    newHtml += pic + parts[i];
  }
}

fs.writeFileSync(filePath, newHtml, 'utf8');
console.log('Images mapped automatically!');
