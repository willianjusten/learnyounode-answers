http = require("http");

var url = process.argv[2];

http.get(url, function(response){
	var result = "";
	response.setEncoding("utf-8");
	response.on("data", function(data){
		result += data;
	});

	response.on("end", function(){
		console.log(result.length);
		console.log(result);
	});
});