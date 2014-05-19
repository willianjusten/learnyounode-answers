// Require necessary modules
fs   = require("fs");
path = require("path");

// exporting the module 
module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, list){
		if(err)
			return callback(err);

		// return just the files with the ext
		list = list.filter(function(file){
			return path.extname(file) === '.' + ext;
		});

		callback(null, list);
	});
};