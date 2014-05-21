var http = require("http"),
	map  = require("through2-map");

// Allow to take data and return a new data
// over pipes
uc = map(function(chunk){
	return chunk.toString().toUpperCase();
});

var server = http.createServer(function (req,res){
	// verify if is post
	if(req.method == 'POST'){
		// send the UpperCased post to response
		req.pipe(uc).pipe(res);
	}
});
server.listen(process.argv[2]);