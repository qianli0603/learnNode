const getMe10000Promise = new Promise(function(resolve,reject){
    if(Math.random() < 0.3){
        reject('失败')
    }else{
        resolve(10000)
    }
});

getMe10000Promise.then(function(result){
    console.log('成功',result)
}).catch(function(err){
    console.log('失败',err)
})