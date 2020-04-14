const fs = require('fs');

//const text = fs.readFileSync('./assets/ReadMe.txt', 'UTF-8');

fs.readFile('./assets/ReadMe.txt', 'UTF-8', (err, text) => {
    console.log(text);
    console.log('******************************************************')
});

fs.readFile('./assets/Example.jpg', (err, image) => {
    console.log(image);
    console.log('******************************************************');
});