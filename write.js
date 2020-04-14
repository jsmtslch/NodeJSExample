const fs = require('fs');

const text = "This is the sample text";

fs.writeFile('./assets/SampleText.txt', text, (err) => {
    if(err){
        console.log(err.message());
    }
    else{
        console.log('File Saved');
    }
})