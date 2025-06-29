const fas=require('fs');
const path=fas.readFileSync('./a.txt','utf8');
console.log(path);
const path2=fas.readFileSync('./namer.txt','utf8');
console.log(path2);