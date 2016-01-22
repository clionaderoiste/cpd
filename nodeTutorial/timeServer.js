var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket){
	var date = new Date();
	var month = date.getMonth() + 1;
	socket.write(date.getFullYear() +"-" + month +"-" + date.getDate() +" " + date.getHours() +":" +date.getMinutes() + "\n");
	socket.end();
});
server.listen(port, function(){
	//console.log("listening on port " + port);
});