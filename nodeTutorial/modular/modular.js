var myModule = require('./module.js');

var dirPath = process.argv[2];
var fileExtension = process.argv[3];

myModule(dirPath,fileExtension,function(err, data){
	if(err){
		console.log(err);
	}else{
		data.forEach(function(file){
			console.log(file);
		})
	}
});