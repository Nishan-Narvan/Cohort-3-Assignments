const fs = require('fs');
let d=fs.writeFile('namer.txt','Hello World!,this is an async write!',function(err){
    if(err) throw err;
    console.log('Saved!');
});