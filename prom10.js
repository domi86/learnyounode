var q = require('q');
var qhttp = require('q-io/http');

var blubb = qhttp.read('http://localhost:1337');
blubb.then(function (txt) {
  console.log(txt);
  console.log(JSON.parse(txt));
});