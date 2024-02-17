const io = require("socket.io");

const ioServer = new io.Server(3000, {
  cors: {
    origin: "http://localhost:4200",
  },
});

ioServer.on("connection", (socket) => {
  console.log(`Hi ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Bye ${socket.id}`);
  });

  socket.on("user:message", (data) => {
    ioServer.emit("message", data);
  });
});
