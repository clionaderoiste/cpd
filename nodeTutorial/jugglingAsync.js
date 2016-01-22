var bl = require('bl');
var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var numberOfCalls = 3;
var results = [];

for(var i = 0; i < 3; i++ ) {
	callBob(i, urls[i]);
}

function callBob (position, url){
	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				console.log(err);
			} else {
				results[position] = data.toString();
				done();
			}
		}));
	});
}

function done() {
	if (--numberOfCalls !== 0) {
		return;
	}else{
		results.forEach(function(res){
			console.log(res);
		});
	}
}
