var file  = process.argv[2],
	fs    = require('fs');

var text  = fs.readFile(file, "utf-8", function(err, data){
	if (err) throw err;
	console.log(data.split("\n").length - 1);
});