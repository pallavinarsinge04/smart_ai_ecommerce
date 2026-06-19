
export default function initializeSocket(io) {
  io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    socket.on("joinRoom", (userId) => {
      socket.join(userId);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });
  });
}
