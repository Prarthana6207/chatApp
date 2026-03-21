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
    socket.on("joinRoom", (roomName, userId) => {
      socket.join(roomName);
      console.log("userId", userId, "joined room", roomName);
      socket.to(roomName).emit("userJoined", {
        userId,
        socket: socket.id,
        timeStamp: new Date(),
        roomName,
      });
    });
    // Listen for incoming messages from clients
    socket.on("message", (message, roomName) => {
      // Broadcast the message to everyone else in the room (except sender)
      socket.broadcast.to(roomName).emit("message", {
        _id: Date.now().toString(),
        text: message.text,
        createdAt: new Date(),
        user: message.user,
      });
    });

    socket.on("leaveRoom", (roomName, userId) => {
      socket.leave(roomName);
      console.log("userId", userId, "left room", roomName);
      socket.to(roomName).emit("userLeft", {
        userId,
        socket: socket.id,
        timeStamp: new Date(),
        roomName,
      });
    });

    // Handle disconnections
    socket.on("disconnect", () => {
      console.log(socket.id, " disconnected");
    });
  });

  return io;
};
