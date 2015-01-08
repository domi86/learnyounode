var url = require('url');
var qs = require('querystring');
var addr = prompt();

var params = qs.parse(url.parse(addr).query);
console.log(url.resolve(addr, params.file));