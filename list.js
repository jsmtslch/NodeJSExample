const fs = require('fs');

console.log('Started reading files')
//const files = fs.readdirSync('./assets');// this is sync call so JS will hault all the other code that it is executing

fs.readdir('./assets', (err, files) => {
    if(err){
        throw err;
    }
    console.log('Complete');
    console.log(files);
});

