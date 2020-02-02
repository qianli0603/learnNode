const http = require('http');
const server = http.createServer(function(request,response){
    console.log('一个客户端请求来了')
    console.log(request.url)
    if(request.url === '/index.html'){
        response.write(`
            <div>
                <p>home</p>
                <h1>hello world</h1>
            </div>
        `)
    }else if(request.url === '/about.html'){
        response.write('about')
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