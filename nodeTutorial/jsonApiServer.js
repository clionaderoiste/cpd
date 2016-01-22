var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
	var parsedRequest =  url.parse(req.url, true);
	var pathname = parsedRequest.pathname;
	var query = parsedRequest.query;
	if(pathname == "/api/parsetime" && query.hasOwnProperty('iso')){
		var returnValues ={};
		try{
			var date = new Date(query.iso);
			returnValues = {
				"hour": date.getHours(),
				"minute": date.getMinutes(),
				"second": date.getSeconds()
			};
		}catch (er){
			res.statusCode = 400;
			return res.end('error: ' + er.message);
		}
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(returnValues));
		res.end();
	}else if(pathname == "/api/unixtime" && query.hasOwnProperty('iso')){
		var returnValue = {};
		try{
			var date = new Date(query.iso);
			returnValue =  {
				"unixtime": date.getTime()
			};
		}catch (er){
			res.statusCode = 400;
			return res.end('error: ' + er.message);
		}
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(returnValue));
		res.end();
	}else{
		res.statusCode = 404;
		return res.end('Not Found');
	}
});

server.listen(port, function(){
	//console.log("listening on port " + port);
	////var postData = 'hello';
	//
	//var options = {
	//	hostname: 'localhost',
	//	path:'/api/parsetime?iso=2013-08-10T12:10:15.474Z',
	//	port: port,
	//	method: 'GET'
	//};
	//
	//var req = http.request(options, function(res) {
	//	//res.setEncoding('utf8');
	//	res.on('data', function (chunk) {
	//		console.log('BODY: ' + chunk);
	//	});
	//	res.on('end', function() {
	//		//console.log('No more data in response.')
	//	})
	//});
	//
	//req.on('error', function(e) {
	//	console.log('problem with request: ' + e.message);
	//});
	//
	//req.end();
	//
	//var options2 = {
	//	hostname: 'localhost',
	//	path:'/api/unixtime?iso=2013-08-10T12:10:15.474Z',
	//	port: port,
	//	method: 'GET'
	//};
	//
	//var req2 = http.request(options2, function(res) {
	//	//res.setEncoding('utf8');
	//	res.on('data', function (chunk) {
	//		console.log('BODY: ' + chunk);
	//	});
	//	res.on('end', function() {
	//		//console.log('No more data in response.')
	//	})
	//});
	//
	//req2.on('error', function(e) {
	//	console.log('problem with request: ' + e.message);
	//});
	//
	//req2.end();
});