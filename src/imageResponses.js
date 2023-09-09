const fs = require('fs'); // pull in the file system module

const img1 = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(img1);
  response.end();
};

module.exports.getImg = getImg;
