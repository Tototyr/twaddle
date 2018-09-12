var express = require('express');
var app = express();
var port = 3000;
var server = app.listen(port);
var cors = require('cors');

var io = require('socket.io').listen(server);

app.get('/login', function (req, res) {
    res.json({
        title: "hello world"
    });
});

app.use(cors({
    origin: true,
    credentials: true
}));

io.on('connection', function (socket) {
    socket.emit('chat', { hello: 'world' });

    socket.on('my other event', function (data) {
        console.log(data);
    });
});