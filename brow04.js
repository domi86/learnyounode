var ndjson = require('./ndjson.js');

var strings = prompt();
var arr = prompt();

console.log(ndjson.parse(strings));
console.log(ndjson.stringify(arr));