var http = require('http');
var url = process.argv[2];
http.get(url, getCallback);

function getCallback(response){
  response.setEncoding('utf8');
  response.on("data", dataCallback);
}

function dataCallback(data){
  console.log(data);
}