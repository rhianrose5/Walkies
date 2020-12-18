let express = require("express");
let path = require("path");
let http = require("http");
let socketIo = require("socket.io");

let app = express();
let server = http.createServer(app);

app.use(express.static(path.join(__dirname, "resources")));

let io = socketIo(server);

io.on("connection", function (socket) {
  console.log("a user connected");

  socket.emit("server message", "Hello World!");

  socket.on("client message", function (msg) {
    console.log("Red'd from client: '" + msg + "'");
  });
});

server.listen(9000, () => {
  console.log("Listening on port 9000")
})
