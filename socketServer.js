let express = require("express");
let path = require("path");
let http = require("http");
let socketIo = require("socket.io");
// Set up the app and server.
let app = express();
let server = http.createServer(app);
let cors = require("cors")

// Configure statics.
//app.use(express.static(path.join(__dirname, "resources")));

app.use(express.static(__dirname + '/dist/WalkiesWebsite'));
//app.use(express.static(__dirname));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/WalkiesWebsite/index.html'));
});

// Initialise the socket server.
//let io = socketIo(server);

let io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true
  }
});

// "On connection" handler.
io.on("connection", function (socket) {
  console.log("a user connected");
  // Send a message to the client.
  socket.emit("server message", "Hello World");
  // Handler for messages from the client.
  socket.on("client message", function (msg) {
    console.log("Rec’d from client: ’" + msg + "’");
  });
});
server.listen(9000, () => {
  console.log("Listening on 9000");
});
