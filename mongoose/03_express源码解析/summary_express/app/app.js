const http = require('http');

http.createServer(function(req,res){
    if(req.url === '/index.html'){

    }else if(req.url === '/product_list.html' ){

    }
})
let map = new Map();

map.set('/get_products',function(req,res){

});

function my_express(){
    
    let map = new Map();
    return {
        get:function(path,callback){
            map.set(path,callback);
        }
    }
}