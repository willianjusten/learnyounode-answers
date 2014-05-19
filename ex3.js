var file  = process.argv[2],
	fs    = require('fs'),
	data  = fs.readFileSync(file, "utf-8"),
	array = data.split('\n');

console.log(array.length - 1);


/**
 * OFFICIAL SOLUTION
 *
 * var fs = require('fs');
 *
 * var contents = fs.readFileSync(process.argv[2]);
 * var lines = contents.toString().split("\n").length - 1
 * console.log(lines)
 * 
 */