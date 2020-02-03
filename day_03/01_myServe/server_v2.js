const http = require('http');
const server = http.createServer(function(request,response){
    console.log('一个客户端请求来了')
    console.log(request.url)   
    if(request.url === '/index.html'){
        response.writeHead(200,{
            'Content-type':'text/html; charset=utf-8'
        });
        response.write(`
            <div>
                <p>首页</p>
                <h1>hello world</h1>
            </div>
        `)
    }else if(request.url === '/about.html'){
        response.writeHead(200,{
            'Content-type':'text/html; charset=utf-8'
        });
        response.write(`
        <div>
            <h1>国内最大的品牌</h1>
        </div>
        `)
    }else{
        response.write('not found')

    }
    response.end();
});
server.listen(5000,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('http://localhost:5000');
})