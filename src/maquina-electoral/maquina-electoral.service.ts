import { Injectable } from '@nestjs/common';
import { CreateMaquinaElectoralDto } from './dto/create-maquina-electoral.dto';
import { UpdateMaquinaElectoralDto } from './dto/update-maquina-electoral.dto';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: {
      socket: Socket,
      user: any//User
  }
}

@Injectable()
export class MaquinaElectoralService {

 /*  private connectedClients: ConnectedClients = {}

  constructor(
      private readonly userRepository: any//Repository<User>
  ) {}


  async registerClient( client: Socket, userId: string ) {

      const usuario = await this.verifarExistenciaDeUsuario(userId);
      if ( !usuario ) throw new Error(`El usuario ${ userId } no fue encontrado!`);

      this.checkUserConnection( usuario );

      this.connectedClients[client.id] = {
          socket: client,
          user: usuario,
      };
  }

  async verifarExistenciaDeUsuario(id: string): Promise<boolean> {
    const usuario = await this.userRepository.findOneBy({id});
    if(!usuario) return false;
    return true;
  }

  removeClient( clientId: string ) {
      delete this.connectedClients[clientId];
  }


  getConnectedClients(): string[] {
      return Object.keys( this.connectedClients );
  }



  private checkUserConnection( user: any ) {

      for (const clientId of Object.keys( this.connectedClients ) ) {
          
          const connectedClient = this.connectedClients[clientId];

          if ( connectedClient.user.id === user.id ){
              connectedClient.socket.disconnect();
              break;
          }
      }

  } */
  
}
