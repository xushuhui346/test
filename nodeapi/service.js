//同样的功能，不同的实现方式

//实现方式１：匿名函数
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World8888');
    response.end();
}).listen(8888);


//实现方式２：先定义后传递
var http = require('http');

function onRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World8889');
    response.end();
}
http.createServer(onRequest).listen(8889)