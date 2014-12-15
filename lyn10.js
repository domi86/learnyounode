var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var srv = net.createServer(function (socket) {
  socket.write(strftime('%Y-%m-%d %H:%M', new Date()) + '\n');
  socket.end();
});
srv.listen(port);