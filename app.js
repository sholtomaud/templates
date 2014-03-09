var http = require('http');

var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello Gaffa-js Template Word\n");
});

server.listen(80);

console.log("server running at http://128.199.215.62:80/");


