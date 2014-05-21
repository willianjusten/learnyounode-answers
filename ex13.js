var http = require('http');
var url = require('url');

// create routes do pass
var routes = {
	"/api/parsetime": function(parsedUrl) {
		d = new Date(parsedUrl.query.iso);
		return {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		};
	},
	"/api/unixtime": function(parsedUrl) {
		return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
	}
};

// create the server to receive the url
server = http.createServer(function(request, response) {
	// verify the parsed url
	// and define the route
	parsedUrl = url.parse(request.url, true);
	resource = routes[parsedUrl.pathname];
	// if the url is correct
	if (resource) {
		response.writeHead(200, {"Content-Type": "application/json"});
		response.end(JSON.stringify(resource(parsedUrl)));
	}
	else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(process.argv[2]);