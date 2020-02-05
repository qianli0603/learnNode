const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true,useUnifiedTopology: true});
const GoodsSchema = mongoose.Schema({
    name:String,
    price:Number,
    pic:String
});       
const Goods = mongoose.model('Goods',GoodsSchema);

let query = Goods.updateOne({name:'苹果'},{$set:{price:100}});

async function fun(){
    let ret = await query.exec();
    console.log('商品修改成功',ret);
    mongoose.connection.close();
}
// fun();
 
async function prod (){
    let ret = await Goods.updateMany({name:/果$/},{$set:{price:0}}).exec();
    console.log('商品修改成功',ret);
    mongoose.connection.close();
}
prod()

