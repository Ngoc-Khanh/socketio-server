const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const io = new Server(http.createServer(app));

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Lắng nghe sự kiện "message"
  socket.on("message", (msg) => {
    console.log("Received message:", msg);
    socket.emit("response", `Server received: ${msg}`);
  });

  // Xử lý khi client ngắt kết nối
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Định tuyến API
app.get("/", (req, res) => {
  res.send("Socket.IO server is running!");
});

// Lắng nghe cổng
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});