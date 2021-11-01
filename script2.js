var a= "anuj";
console.log("global message =" + a);
var bani=function() 
{
	var a= " gopi";
	console.log("message =" +a);
	tani();
}
function tani () {
	console.log("message =" +a);
}
bani();
