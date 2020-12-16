//Install express server
const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io')
const io = socketIO(server);
io.origins((origin, callback) => {
  if (origin !== 'http://localhost:4200') {
    return callback('origin not allowed', false);
  }
  callback(null, true);
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/WalkiesWebsite'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/WalkiesWebsite/index.html'));
});

io.on('connection', (socket) => {
  console.log('user connected');
});

io.on('newComment', (comment) => {
  io.emit(comment);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
