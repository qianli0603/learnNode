const http = require('http');
const server = http.createServer(function(request,response){
    console.log('一个客户端请求来了')
    response.write('hello world');
    response.end();
});
server.listen(5000,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('http://localhost:5000');
})