var http = require('http');
const util = require('util');

var server = http.createServer(function (req, res) {
  try {
      console.log('route: %s', req.url);
      console.log('headers: %s', req.headers);
      req.on('data', function (dat) {
         console.log('dat: ', dat.toString());
      });
  } catch (e) {
      console.log(e);
      res.end('failed\r\n');
  }
});

server.on('error', function (err) {
  console.log(err);
});

server.listen(process.env.PORT, function () {
    address = server.address();
    console.log('opened server on %j', address);
});
