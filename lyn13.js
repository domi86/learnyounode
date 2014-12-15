var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {

  var reqUrl = url.parse(req.url, true);
  if(reqUrl.pathname == '/api/parsetime') {
    var iso = reqUrl.query.iso;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('bla');
  }
  else if(reqUrl.pathname == '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  }
  else {
    //404
  }

}).listen(port);