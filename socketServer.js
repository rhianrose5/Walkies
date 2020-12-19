/*let express = require("express");
let path = require("path");
let http = require("http");
let socketIo = require("socket.io");
// Set up the app and server.
let app = express();
let server = http.createServer(app);*/
/*var express = require('express');
var app = express();
var http = require('http').Server(app);
let cors = require("cors")

var server = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true
  }
});

var counter = 0; //Initial counter value 

// Configure statics.
//app.use(express.static(path.join(__dirname, "resources")));

app.use(express.static(__dirname + '/dist/WalkiesWebsite'));
//app.use(express.static(__dirname));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/WalkiesWebsite/index.html'));
});

// Initialise the socket server.
//let io = socketIo(server);

/*let io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true
  }
});*/

// "On connection" handler.
/*io.on("connection", function (socket) {
  console.log("a user connected");
  // Send a message to the client.
  socket.emit("server message", "Hello World");
  // Handler for messages from the client.
  socket.on("client message", function (msg) {
    console.log("Rec’d from client: ’" + msg + "’");
  });
});*/

/*server.on('connection', function (socket) {
  console.log('a user connected');

  //on user connected sends the current click count
  socket.emit('click_count', counter);

  //when user click the button
  socket.on('clicked', function () {
    counter += 1; //increments global click count

    server.emit('click_count', counter); //send to all users new counter value
  });

});

http.listen(9000, () => {
  console.log("Listening on 9000");
});*/

var express = require('express');
var app = express();
var http = require('http').Server(app);
var server = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true
  }
});

var counter = 0; //Initial counter value 

app.get('/', function (req, res) {

  res.sendFile(__dirname + '/src/index.html');
});


server.on('connection', function (socket) {
  console.log('a user connected');

  //on user connected sends the current click count
  socket.emit('click_count', counter);

  //when user click the button
  socket.on('clicked', function () {
    console.log("reached the server with click!")
    counter += 1; //increments global click count

    server.emit('click_count', counter); //send to all users new counter value
  });

});

//starting server
http.listen(9000, function () {
  console.log('listening on port: 9000');
});
