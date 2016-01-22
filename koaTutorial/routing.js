var koa = require('koa');
// /, /404, /500
/*
 /    - hello koa
 /404 - page not found
 /500 - internal server error
 */
var port = process.argv[2];
var app = koa();

app.use(function* (next) {
	if (this.path === '/') {
		this.body = 'hello koa';
	}
	if (this.path === '/404') {
		this.body = 'page not found';
	}
	if (this.path === '/500') {
		this.body = 'internal server error';
	}
});
/*offcicial solution:
 app.use(function* (next) {
 if (this.path !== '/') {
 return yield next;
 }

 this.body = 'hello koa';
 });

 app.use(function* (next) {
 if (this.path !== '/404') {
 return yield next;
 }

 this.body = 'page not found';
 });

 app.use(function* (next) {
 if (this.path !== '/500') {
 return yield next;
 }

 this.body = 'internal server error';
 });
 */
app.listen(port);

