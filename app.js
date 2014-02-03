var http    = require('http');
var express = require('express');
var socket  = require('socket.io');

var app = express();

var server = http.createServer(app);

app.configure(function() {
    app.use(express.static('public'));
});

server.listen(5000);
var io = socket.listen(server);

io.sockets.on('connection', function (socket) {
    socket.on('nick', function(data) {
        console.log(data);
        socket.nickname = data.nick;
        socket.emit('nick apply', {})
    });
});