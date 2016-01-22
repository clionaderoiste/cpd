var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(function (req, res) {
	var stream = fs.createReadStream(filepath);
	stream.pipe(res);
});

server.listen(port, function(){
	//console.log("listening on port " + port + " for file: " + filepath);
});
