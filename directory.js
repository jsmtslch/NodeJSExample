const fs = require('fs');

if(fs.existsSync('NewFolder')){
    console.log('Directory already exists');
}else{
    fs.mkdir('NewFolder', (err)=>{
        if(err){
            throw err;
        }else{
            console.log('Directory created');
        }
    })
}
