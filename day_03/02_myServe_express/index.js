const express = require('express');
const path = require('path');
const app = express();
let pathStatic = path.join(__dirname,'public');
const staticMiddleWare = express.static(pathStatic);

app.use(staticMiddleWare);
app.get('/user',function(req,res){
    res.send('hello world')
});

app.get('/userinfo',function(req,res){
    res.send({
        name:'张三',
        age:18
    })
})

const port = 5000;
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('http://localhost:' + port);
})  