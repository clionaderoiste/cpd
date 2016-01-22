var fs = require('fs');
var filePath = process.argv[2];
var buffer = fs.readFileSync(filePath);
var str = buffer.toString();
var lines = str.split('\n');
console.log(lines.length -1);