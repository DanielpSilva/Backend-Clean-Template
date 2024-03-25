import { Socket, Server as SocketIOServer } from "socket.io";

interface WebSocketHandshakeQuery {
  session?: string;
  path?: string;
}

export class WebSocketAdapter {
  private io: SocketIOServer;

  constructor(io: SocketIOServer) {
    this.io = io;

    this.setupListeners();
  }

  private async handleConnection(socket: Socket) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { session: session_id, path } = socket.handshake.query as WebSocketHandshakeQuery;

    socket.emit("accessGranted");

    socket.on("disconnect", async () => {});
  }

  private setupListeners(): void {
    this.io.on("connection", (socket) => this.handleConnection(socket));
  }
}
