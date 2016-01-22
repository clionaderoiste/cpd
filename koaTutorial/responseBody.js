var koa = require('koa');
var parse = require('co-body');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var app = koa();

// handlers here
app.use(function* (next) {
	if (this.path !== '/json') {
		return yield next;
	}

	this.body =  { foo: 'bar' };
});
app.use(function* (next) {
	if (this.path !== '/stream') {
		return yield next;
	}

	this.body =  fs.createReadStream(file);
});

app.listen(port);