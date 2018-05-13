var koa = require('koa');
var parse = require('co-body');

var port = process.argv[2];

var app = new koa();

// handlers here
app.use(function *(next) {
	var messageType = this.request.type;
	if (messageType !== 'application/json'){
        this.body = "ok";  
    }else{
        this.body = {message: 'hi!'};
    }

});

app.listen(port);

/*
Official solution
var koa = require('koa');
    
    var app = koa();
    
    app.use(function* () {
      this.body = this.request.is('json')
        ? { message: 'hi!' }
        : 'ok';
    });
    
    app.listen(process.argv[2]);

*/