function sum(m,n){
    let total = 0
    for(var i = m; i < n; i++){
       total = total + i 
    }
    return total
}
let result = sum(100,200)
console.log("同步直接获取结果",result)
console.log("------------------------------")

function sum222(m,n,callback){
    let total = 0
    for(var i = m; i < n; i++){
       total = total + i 
    }
    callback(total)
}
console.log("同步获取结果,通过回调")
sum222(100,200,function(result){
    console.log("同步获取回调结果",result)
})
console.log("执行结束")
console.log("------------------------------")

// 异步获取结果
function sum333(m,n,callback){
    let total = 0
    for(var i = m; i < n; i++){
       total = total + i 
    }
    setTimeout(function(){
        callback(total)
    })
}
console.log("异步获取结果,通过回调")
sum333(100,200,function(result){
    console.log("异步获取回调结果",result)
})
console.log("执行结束")

console.log("------------------------------")


