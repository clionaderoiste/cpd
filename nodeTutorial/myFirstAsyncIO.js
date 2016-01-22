var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, function(err, data){
	var buffer = data;
	var str = buffer.toString();
	var lines = str.split('\n');
	console.log(lines.length -1);
	//console.log(data);
});
