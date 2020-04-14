const personData = require('./assets/json.json');
const fs = require('fs');

personData.forEach(element => {
    fs.appendFile('./assets/'+element.id+'.txt', `${element.id}: ${element.name}`, (err) => {
        if(err){
            throw err;
        }
    })
});

console.log('Appending done');