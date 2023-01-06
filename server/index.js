const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origins: ["http://localhost:8081"],
  },
});
io.on("connection", (socket) => {
  socket.emit("sessionsCounter", socket.adapter.sids.size);
});
server.listen(3000);
