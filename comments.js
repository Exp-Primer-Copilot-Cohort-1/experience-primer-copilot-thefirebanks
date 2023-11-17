// Create web server application with Node.js.
// Run this file using the command: node comments.js
// and visit http://localhost:8080/ in your browser.

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.end("Hello World\n");
  response.end("Hello World from comments.js\n");
});

// Listen on port 8080, IP defaults to

