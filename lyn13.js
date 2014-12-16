var http = require('http');
var url = require('url');

var port = process.argv[2];

http.createServer(function(req, res) {
  var reqUrl = url.parse(req.url, true);
  if(reqUrl.pathname == '/api/parsetime') {
    var isoDate = new Date(reqUrl.query.iso);
	var printDate = { 'hour': isoDate.getHours(), 'minute': isoDate.getMinutes(), 'second':isoDate.getSeconds()};
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(printDate));
  }
  else if(reqUrl.pathname == '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
	var isoDate = new Date(reqUrl.query.iso);
    res.end(JSON.stringify({'unixtime': isoDate.getTime()}));
  }
  else {
    res.writeHead(404);
    res.end();
  }
}).listen(port);
