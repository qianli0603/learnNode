const http = require('http');

const fs = require('fs');
const server = http.createServer(function(request,response){
    if(request.url === '/index.html'){
        fs.readFile('./static/index.html','utf-8',function(err,data){
            if(err){
                response.write('出错了，工程师正在解决');
                response.end();
                return;
            }
            response.write(data);
            response.end();
        })
    }else if(request.url === '/css/index.css'){
        fs.readFile('./static/css/index.css','utf-8',function(err,data){
            if(err){
                response.write('出错了，工程师正在解决');
                response.end();
                return;
            }
            response.write(data);
            response.end();
        })
    }else if(request.url === '/js/index.js'){
        fs.readFile('./static/js/index.js','utf-8',function(err,data){
            if(err){
                response.write('出错了，工程师正在解决');
                response.end();
                return;
            }
            response.write(data);
            response.end();
        })
    }else{
        response.write('Not Found 404');
        response.end();
    }
});
server.listen(5000,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('http://localhost:5000');
})