var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var fileExtension = '.' + process.argv[3];

fs.readdir(dirPath, function(err, data){
	for(var i = 0; i < data.length; i++){
		var ext = path.extname(data[i]);
		if(ext == fileExtension){
			console.log(data[i]);
		}
	}
});
