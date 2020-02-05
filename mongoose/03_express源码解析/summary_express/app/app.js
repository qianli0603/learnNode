const http = require('http');



let map = new Map();

map.set('/get_products',function(req,res){

});

function my_express(){
    
    let getmap = new Map();
    let postmap = new Map();
    const server = http.createServer(function(req,res){
        res.write();
        res.end();
        res.send = function(arg){
            if(typeof arg === 'string'){
                res.write(arg);
                res.end();
            }else if(typeof arg === 'object'){
                res.write(arg);
                res.end();
            }
        }
        if(req.method === 'GET'){
            let callback = getmap.get(req.url);
            callback(req,res);
        }else if (req.method === 'POST') {
            let callback = postmap.get(req.url);
            callback(req,res);
        }{

        }

        // if(req.url === '/index.html'){
    
        // }else if(req.url === '/product_list.html' ){
    
        // }
    })
    
    server.listen(5000);

    return {
        get:function(path,callback){
            getmap.set(path,callback);
        },
        post:function(path,callback){
            postmap.set(path,callback);
        },
        listen(port,callback){
            server.listen(5000,callback);
        }
    }
}
const app = my_express();

app.get('/index',function(req,res){

});

app.listen(prot,function(err){

})
