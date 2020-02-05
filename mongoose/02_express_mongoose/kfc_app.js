const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const pathRoot = path.join(__dirname,'public');
const staticMiddleWare = express.static(pathRoot);
const app = express();

mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true,useUnifiedTopology: true});

const productTypeSchema = mongoose.Schema({ name:String });

const productType = mongoose.model('good',productTypeSchema);

app.use(staticMiddleWare);

app.get('/userinfo',function(req,res){
    res.send({
        name:'张三',
        age:18
    })
})

app.get('/product_info',async function(req,res){
   let productTypsList = await productType.find().exec(); 
   res.send(productTypsList);
})  


app.get('/product_list',function(req,res){

})

const prot = 5000;

app.listen(prot,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('请访问：http://localhost:' + prot);
});