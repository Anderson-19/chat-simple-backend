import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { SocketsService } from './sockets.service';
import { Server, Socket } from 'socket.io';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: Date;
  roomId?: string;
}

@WebSocketGateway({
  cors: {
    origin: [
      'https://hoppscotch.io',
      'http://192.168.56.103:3000',
      'http://localhost:3001',
    ],
  },
})
export class SocketsGateway implements OnGatewayConnection, OnGatewayDisconnect  {

  @WebSocketServer()
  server: Server;

  constructor(private readonly socketsService: SocketsService) {}

  handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    const [type, id] = token.split(' ') ?? [];

    console.log(`Cliente conectado ${client.id} | Cliente ${id}`);
    this.socketsService.registerClient(client, id);
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente ${client.id} desconectado.`);
    this.socketsService.removeClient(client.id);
  }

  @SubscribeMessage('unirmeAlGrupo')
  handleGroup(client: Socket, grupo: string){
    client.join(grupo);
  }

  @SubscribeMessage('chat message')
  handleMessage(client: Socket, data: any) {
    const clientes = this.socketsService.getConnectedClients();
    client.to(data.room).emit('chat message', data.message); 
  }

}
