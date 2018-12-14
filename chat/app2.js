var static = require('./node-static');
//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public');
var socket = require('./routes/socket.js');
var server=require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8000);
console.log('node-static & socket.io server listening on port 8000');
var io = require('socket.io').listen(server);
io.sockets.on('connection', socket);