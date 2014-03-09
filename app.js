var http = require('http'),
	mongoose = require('mongoose'),
	format = require('util').format;

mongoose.connect('mongodb://127.0.0.1:27017/test');

var db =mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function callback(){
	//all good
	console.log("made connection to mongodb/test");
});

var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello Gaffa-js Template Word\n");
});

server.listen(80);

console.log("server running at http://128.199.215.62:80/");


