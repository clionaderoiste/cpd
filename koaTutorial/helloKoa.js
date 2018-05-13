var koa = require('koa');

var port = process.argv[2];
var app = new koa();

// handlers here
app.use(function *() {
	// you can set the response body in handler like this
	this.body = 'hello koa';
});

app.listen(port);



