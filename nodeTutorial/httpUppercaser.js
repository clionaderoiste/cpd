var http = require('http');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
	req.setEncoding("utf8");
	var body = '';
	if(req.method == 'POST'){
		req.on('data', function(chunk){
			//console.log(chunk);
			body += chunk.toUpperCase();
		});
		req.on('end', function () {
			try {
				var data = body;
			} catch (er) {
				res.statusCode = 400;
				return res.end('error: ' + er.message);
			}
			res.write(data);
			res.end();
		});
	}else{
		res.statusCode = 400;
		return res.end('error: ' + er.message);
	}
});

server.listen(port, function(){
//	console.log("listening on port " + port);
//	var postData = 'hello';
//
//	var options = {
//		hostname: 'localhost',
//		port: port,
//		method: 'POST',
//		headers: {
//			'Content-Type': 'application/x-www-form-urlencoded',
//			'Content-Length': postData.length
//		}
//	};
//
//	var req = http.request(options, function(res) {
//		res.setEncoding('utf8');
//		res.on('data', function (chunk) {
//			console.log('BODY: ' + chunk);
//		});
//		res.on('end', function() {
//			console.log('No more data in response.')
//		})
//	});
//
//	req.on('error', function(e) {
//		console.log('problem with request: ' + e.message);
//	});
//
//	// write data to request body
//	req.write(postData);
//	req.end();
//	var postData = 'brave';
//
//	var options = {
//		hostname: 'localhost',
//		port: port,
//		method: 'POST',
//		headers: {
//			'Content-Type': 'application/x-www-form-urlencoded',
//			'Content-Length': postData.length
//		}
//	};
//
//	var req = http.request(options, function(res) {
//		res.setEncoding('utf8');
//		res.on('data', function (chunk) {
//			console.log('BODY: ' + chunk);
//		});
//		res.on('end', function() {
//			console.log('No more data in response.')
//		})
//	});
//
//	req.on('error', function(e) {
//		console.log('problem with request: ' + e.message);
//	});
//
//	// write data to request body
//	req.write(postData);
//	req.end();
//	var postData = 'world';
//
//	var options = {
//		hostname: 'localhost',
//		port: port,
//		method: 'POST',
//		headers: {
//			'Content-Type': 'application/x-www-form-urlencoded',
//			'Content-Length': postData.length
//		}
//	};
//
//	var req = http.request(options, function(res) {
//		res.setEncoding('utf8');
//		res.on('data', function (chunk) {
//			console.log('BODY: ' + chunk);
//		});
//		res.on('end', function() {
//			console.log('No more data in response.')
//		})
//	});
//
//	req.on('error', function(e) {
//		console.log('problem with request: ' + e.message);
//	});
//
//	// write data to request body
//	req.write(postData);
//	req.end();
});
/*
 var http = require('http')
 var map = require('through2-map')

 var server = http.createServer(function (req, res) {
 if (req.method != 'POST')
 return res.end('send me a POST\n')

 req.pipe(map(function (chunk) {
 return chunk.toString().toUpperCase()
 })).pipe(res)
 })

 server.listen(Number(process.argv[2]))

 */