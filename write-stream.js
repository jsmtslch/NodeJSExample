const fs = require('fs');

const fileStream = fs.createWriteStream('./assets/mystreamedfile.txt', 'UTF-8');
const readStream = fs.createReadStream('./assets/ReadMe.txt', 'UTF-8');
readStream.on('data', data => {
    fileStream.write(data);
});