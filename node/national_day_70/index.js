const package = require('./package.json');
const images = require('images');
console.log(package.version);

const bg_image = images('./images/avatar.jpg');
// console.log(background);
const gq_image = images('./images/gq.jpeg');
// console.log(qg_image);
const offset = { x: 5, y:5 };
// console.log(qg_image.width(), qg_image.height());
const foreground_image = images(gq_image.width()+offset.x, gq_image.height()+offset.y).fill(0xff, 0xff,0xff, 1).draw(gq_image, offset.x, offset.y);

const pos = {
  x: bg_image.width() - gq_image.width(),
  y: bg_image.height() - gq_image.height()
}
bg_image.draw(foreground_image, pos.x, pos.y).save('./images/result.jpg', {quality: 100})