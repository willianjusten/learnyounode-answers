// Requiring necessary modules
fs   = require("fs");
path = require("path");

// Creating variables passed in terminal
var dir = process.argv[2],
	ext = process.argv[3];

// fs.readdir for IO read
var contents = fs.readdir(dir, function(err, list){
	if (err) throw err;

	// loop to compare and print
	for(var i = 0; i<list.length;i++)
		if(path.extname(list[i]) === "." + ext)
			console.log(list[i]);
});