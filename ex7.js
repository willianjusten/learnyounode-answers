http = require("http");
var url = process.argv[2];

// http.get have 3 responses (data, error, end)
http.get(url, function(response){
	response.setEncoding("utf-8");
	response.on("data", console.log);
	response.on("error", console.error);
});
