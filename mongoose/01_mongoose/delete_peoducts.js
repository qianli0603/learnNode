const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true,useUnifiedTopology: true});
const GoodsSchema = mongoose.Schema({
    name:String,
    price:Number,
    pic:String
});       
const Goods = mongoose.model('Goods',GoodsSchema);



async function fun(){
    let query = await Goods.deleteOne({name:'苹果'}).exec();
    console.log('商品删除成功',query);
    mongoose.connection.close();
}
fun();