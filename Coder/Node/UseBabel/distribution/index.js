'use strict';

var http = require('http');
var port = 3001;
var server = http.createServer(function (request, response) {
  // response.write(`This is a response for a request !`);
  response.writeHead(200, {
    'Trailer': 'Content-MD5'
  });
  var ipAddress = request.socket.remoteAddress;
  response.write('Your IP address is: ' + ipAddress + ' \r\n'); //write a response to client
  response.write('Request\'s url: ' + request.url); //lấy url từ cilent lên, ? là bắt đầu tham số, & là chia tách các tham số đầu vào mà gửi từ cilent lên
  response.write('Detail request\'s url: ' + require('url').parse(request.url, true));
  response.end();
}).listen(port);
console.log('Server is running on port : ' + port);
console.log('Hello, how are you? I am fine');