const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true,useUnifiedTopology: true});
const GoodsSchema = mongoose.Schema({
    name:String,
    price:Number,
    pic:String
});
const Goods = mongoose.model('Goods',GoodsSchema);

// Goods.create({name:'苹果',price:18,pic:'🍎'}).then(function(result){
//     console.log('商品添加成功',result)
// }).catch(function(err){
//     console.log('商品创建失败，原因：',err)
// })

async function info(){
    let ret;
    ret = await Goods.create({name:'苹果',price:18,pic:'🍎'})
    console.log(ret);
    ret = await Goods.create({name:'苹果',price:18,pic:'🍎'})
    console.log(ret);

    ret = await Goods.create({name:'苹果',price:18,pic:'🍎'})
    console.log(ret);

    ret = await Goods.create({name:'苹果',price:18,pic:'🍎'})
    console.log(ret);

    ret = await Goods.create({name:'苹果',price:18,pic:'🍎'})
    console.log(ret);

    mongoose.connection.close();
}
info();