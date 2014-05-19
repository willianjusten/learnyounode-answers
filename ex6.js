// Require the module
modex6 = require("./modex6");

// Create terminal variables
var dir = process.argv[2],
	ext = process.argv[3];

// Call the module as a function
modex6(dir, ext, function(err,list){
	if(err)
		throw err;

	// take all files from the module function
	list.forEach(function(file){
		console.log(file);
	});
});