import { Socket, Server } from "socket.io";
import { Server as HttpServer } from "http";

export const initSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins for development (restrict in production)
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  io.on("connection", (socket: Socket) => {
    console.log("A new user has connected", socket.id);

    // Listen for incoming messages from clients
    socket.on("message", (message) => {
      // Broadcast the message to all connected clients
      io.emit("message", {
        _id: Date.now().toString(),
        text: message.text,
        createdAt: new Date(),
        user: message.user,
      });
    });

    // Handle disconnections
    socket.on("disconnect", () => {
      console.log(socket.id, " disconnected");
    });
  });

  return io;
};
