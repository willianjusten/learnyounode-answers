net = require("net");

// function to complete with 0, if the n is less than 2 digits
function pad(n) { return n < 10 ? '0' + n : n; }

var server = net.createServer(function(socket){
	date    = new Date();
	year    = pad(date.getFullYear());
	month   = pad(date.getMonth()+1); // starts at 0
	day     = pad(date.getDate());
	hours   = pad(date.getHours());
	minutes = pad(date.getMinutes());

	data = (year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n");
	socket.end(data);
});
server.listen(process.argv[2]);