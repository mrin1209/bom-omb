var http = require('http');
var html = require('fs').readFileSync('index.html');

var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
        response.end(html);
	})
	server.listen(8080);
