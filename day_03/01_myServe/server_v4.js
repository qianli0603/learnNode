const http = require('http');
const fs = require('fs');
const path = require('path');
const MIME = {
    '.js':'applacation/javascript; charset=utf-8',
    '.html':'text/html;charset=utf-8',
    '.css':'text/css; charset=utf-8',
    '.jpg':'image/jpeg',
    '.png':'image/png' 
}
const server = http.createServer(function(request,response){
    let filePath = './static' + request.url;
    if(fs.existsSync(filePath)){
        let extName = path.extname(filePath);
        fs.readFile(filePath,'utf-8',function(err,data){
            if(err){
                response.writeHead(200,{
                    'Content-type':'text/plain;charset=utf-8',
                });
                response.write('出错了，工程师正在解决');
                response.end();
                return;
            }
            let mimeString = MIME[extName];
            response.writeHead(200,{
                'Content-type':mimeString,
            });
            response.write(data);
            response.end();
        })  
    }else{
        response.writeHead(200,{
            'Content-type':'text/plain;charset=utf-8'
        })
        response.write('文件不存在');
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