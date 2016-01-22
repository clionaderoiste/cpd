var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	response.pipe(bl(function (err, data) {
		if(err){
			console.log(err);
		}else {
			console.log(data.length);
			console.log(data.toString());
		}
	}));
});