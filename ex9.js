var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

// 0 from 3, cause we need 3 url
function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}

// main function
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(data);

      results[index] = data.toString();
      count++;

      if (count == 3)
        printResults();
    }));
  });
}

// better way to call 3 times
for (var i = 0; i < 3; i++)
  httpGet(i);
