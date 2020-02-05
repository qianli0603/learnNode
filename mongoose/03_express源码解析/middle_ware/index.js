const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser.JSON());
app.use(function(req,res,next){
    console.log('中间件被调用');
    next();
})

app.get('/index',function(req,res){
    console.log('服务被调用')
    res.send({
        name:'张三',
        age:18
    })
});

let port = 5000;
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('http://localhost:' + port);
})