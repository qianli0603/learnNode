const fs = require('fs');
fs.readFile('./assets/f1.txt','utf-8',function(err,result){
    console.log(result);
})