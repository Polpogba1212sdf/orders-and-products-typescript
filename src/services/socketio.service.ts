import { io, Socket } from "socket.io-client";

class SocketioService {
  socket?: Socket;

  setupSocketConnection() {
    this.socket = io("http://localhost:3000");
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
