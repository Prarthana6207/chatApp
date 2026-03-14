import http = require("http");
import app from "./app";
import { initSocket } from "./socket";

const port = 3000;
const server = http.createServer(app);

// Initialize Socket.IO
initSocket(server);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
