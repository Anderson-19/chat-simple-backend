import { Injectable } from '@nestjs/common';
import { CreateSocketDto } from './dto/create-socket.dto';
import { UpdateSocketDto } from './dto/update-socket.dto';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: {
      socket: Socket,
      userId?: any//User
  }
}

@Injectable()
export class SocketsService {

  private connectedClients: ConnectedClients = {};

  async registerClient( client: Socket, userId?: string ) {

    this.connectedClients[client.id] = { socket: client, userId };
}


removeClient( clientId: string ) {
    delete this.connectedClients[clientId];
}


getConnectedClients(): ConnectedClients {
  //return Object.keys( this.connectedClients );
  return this.connectedClients;
}



/* private checkUserConnection( user: any ) {

    for (const clientId of Object.keys( this.connectedClients ) ) {
        
        const connectedClient = this.connectedClients[clientId];

        if ( connectedClient.user.id === user.id ){
            connectedClient.socket.disconnect();
            break;
        }
    }

} */

}
