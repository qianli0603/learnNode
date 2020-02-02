const fs = require('fs');
let sentences = [];

function readF(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,'utf-8',function(err,result){
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })    
}

let promise = readF('./assets/f1.txt')
promise.then(function(result){
    console.log('成功',result)
    sentences.push(result);
    return readF('./assets/f2.txt')
}).then(function(result){
    sentences.push(result);
    return readF('./assets/f3.txt')
}).then(function(result){
    sentences.push(result);
    return readF('./assets/f4.txt')
}).then(function(result){
    sentences.push(result)
    console.log(sentences)
}).catch(function(err){
    console.log('失败',err)
})

