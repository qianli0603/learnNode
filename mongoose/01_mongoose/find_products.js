const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true,useUnifiedTopology: true});
const GoodsSchema = mongoose.Schema({
    name:String,
    price:Number,
    pic:String
});
const Goods = mongoose.model('Goods',GoodsSchema);
// 查询的第一种用法
// Goods.find(function(err,result){
//     if(err){
//         console.log(err);
//         return;
//     }
//     for(product of result){
//         console.log(product._id,product.name,product.price,product.pic);
//     }
//     mongoose.connection.close();
// })
// let query = Goods.find();
// query.exec().then(function(result){
//     console.log(result);
// })
async function findAll(){
    let result = await Goods.find().exec();
    console.log(result);
    mongoose.connection.close();
}
findAll();