var http     = require("http"),
	fs       = require("fs");

// create server
var server = http.createServer(function (req, res) {
	// read a file and create a stream
	readstream = fs.createReadStream(process.argv[3]);
	// when the stream is read
	readstream.on("open", function(){
		// read and pipe to response
		readstream.pipe(res);
	});
});
server.listen(process.argv[2]);