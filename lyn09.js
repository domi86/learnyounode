var http = require('http');
var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url, function(response){
  var responseData = '';
  response.setEncoding('utf8');
  response.on('data', function(data) { 
    responseData = responseData + data;
  });
  response.on('end', function() {
    console.log(responseData);
    http.get(url2, function(response){
      var responseData = '';
      response.setEncoding('utf8');
      response.on('data', function(data) { 
        responseData = responseData + data;
      });
      response.on('end', function() {
        console.log(responseData);
        http.get(url3, function(response){
          var responseData = '';
          response.setEncoding('utf8');
          response.on('data', function(data) { 
            responseData = responseData + data;
          });
          response.on('end', function() {
            console.log(responseData);
          });
        });
      });
    });
  });
});
