// http 是 node 原生提供的 一个访问 web 网络资源模块
const https = require('https');
const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');
let url = 'http://www.qingdaochina.org/';
let client;
if(url.startsWith('http:')){
    client = http
} else if(url.startsWith('https')){
    client = https
}
client.get(url,function(response){
    let html = '';
    response.on('data',function(chunk){
        html = html + chunk.toString()
    })
    response.on('end',function(){
        // console.log(html);
        const $ = cheerio.load(html);
        const links = $('a');
        console.log(links.length);
        let result = [];
        for(let i = 0; i < links.length; i++){
            let link = links[i];
            if(link.children && link.children.length > 0){
                console.log(link.attribs.href);
                console.log(link.children[0].data);
                result.push(`文本[${link.children[0].data}] 地址[${link.attribs.href}]`); 
            }
        }
        fs.writeFile('./info',result.join('\n'),function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log('下载完毕，请查看')
        })
    })
})