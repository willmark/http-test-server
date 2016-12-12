var http = require('http');
const util = require('util');

var server = http.createServer(function (req, res) {
  try {
      console.log('route: ', req.url);
      console.log('headers: ', req.headers);
      req.on('data', function (dat) {
         console.log('dat: ', dat.toString());
      });
      res.end('OK');
  } catch (e) {
      console.log(e);
      res.end('failed\r\n');
  }
});

server.on('error', function (err) {
  console.log(err);
});

server.listen(8080, function () {
    address = server.address();
    console.log('opened server on %j', address);
});
