var koa = require('koa');
var parse = require('co-body');

var port = process.argv[2];

var app = koa();

// handlers here
app.use(function *() {
	var messageType = this.request.type;
	if (messageType !== 'application/json') return yield next;
	this.body = {message: 'hi!'};
	// you can set the response body in handler like this
	//var body = yield parse(this);
	////console.log(body.name.toUpperCase());
	//this.body = body.name.toUpperCase();
	/*
	 official solution:
	 if (this.method !== 'POST') return yield next;

	 // max body size limit to `1kb`
	 var body = yield parse(this, { limit: '1kb' });

	 // if body.name not exist, respond `400`
	 if (!body.name) this.throw(400, '.name required');

	 this.body = body.name.toUpperCase();
	 */
});

app.listen(port);