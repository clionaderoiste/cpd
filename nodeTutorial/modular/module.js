module.exports = function(dir, ext, callback) {
	var fs = require('fs');
	var path = require('path');

	var dirPath = dir;
	var fileExtension = '.' + ext;
	var files = [];

	fs.readdir(dirPath, function (err, data) {
		if (err) {
			callback(err);
		} else {
			for (var i = 0; i < data.length; i++) {
				var ext = path.extname(data[i]);
				if (ext == fileExtension) {
					files.push(data[i]);
				}
			}
			callback(null, files);
		}
	});
};