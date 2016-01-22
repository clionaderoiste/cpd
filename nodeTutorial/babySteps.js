var arguments = process.argv;
var answer = 0;
for(var i = 2; i < arguments.length; i++){
	answer = answer + +arguments[i];
}
console.log(answer);