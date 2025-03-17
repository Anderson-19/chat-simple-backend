import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';
import { SocketsService } from './sockets.service';
import { CreateSocketDto } from './dto/create-socket.dto';
import { Server, Socket } from 'socket.io';
//import { UpdateSocketDto } from './dto/update-socket.dto';

@WebSocketGateway({
  cors: {
    origin: [
      'https://hoppscotch.io',
      'http://192.168.56.103:3000',
      'http://localhost:3001',
    ],
  },
})
export class SocketsGateway implements OnGatewayConnection {

  @WebSocketServer()
  server: Server;

  constructor(private readonly socketsService: SocketsService) {}


  @SubscribeMessage('createSocket')
  create(@MessageBody() createSocketDto: CreateSocketDto) {
    console.log('Create');
    return this.socketsService.create(createSocketDto);
  }

  handleConnection() {

    this.server.on('connection', (socket: Socket) => {
      console.log('A client connected');
    
      socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        this.server.emit('chat message', msg); // Broadcast the message to all connected clients
      });
    
      socket.on('disconnect', () => {
        console.log('A client disconnected');
      });
    });
  }

}
