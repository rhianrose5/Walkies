//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

var io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/WalkiesWebsite'));
//app.use(express.static(__dirname));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/WalkiesWebsite/index.html'));
});

//Socket Io
io.on('connection', (socket) => {
  console.log('a user connected');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); {
  console.log("Listening on port 8080")
};
