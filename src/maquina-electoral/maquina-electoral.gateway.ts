import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, WsException } from '@nestjs/websockets';
import { MaquinaElectoralService } from './maquina-electoral.service';
import { CreateMaquinaElectoralDto } from './dto/create-maquina-electoral.dto';
import { UpdateMaquinaElectoralDto } from './dto/update-maquina-electoral.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class MaquinaElectoralGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;

  constructor(
    private readonly maquinaElectoralService: MaquinaElectoralService,
   // private readonly jwtService: any //JwtService
  ) {}

  async handleConnection( client: Socket ) {
    const token = client.handshake.headers.authentication as string;
    let payload: any //JwtPayload;
  
    try {
      //payload = this.jwtService.verify( token );
      //await this.maquinaElectoralService.registerClient( client, payload.id ); 
    } catch (error) {
      client.disconnect(true);
      return;
    }
    

  }

  handleDisconnect( client: Socket ) {
    console.log('Cliente desconectado', client.id )
    //this.maquinaElectoralService.removeClient( client.id );
  }

  
  @SubscribeMessage('habilitar-voto')
  habilitarVoto(client: Socket, electorId: string) {
    //const elector = this.maquinaElectoralService.verifarExistenciaDeUsuario(electorId);
    //if(!elector) throw new WsException(`El elector ${ electorId } no se encuntra en el libro`);
    //return this.maquinaElectoralService.create(createMaquinaElectoralDto);
  }

  @SubscribeMessage('votar')
  handleVotar(client: Socket, candidato: string) {
    if (!client['userId']) {
      throw new WsException('No autenticado.');
    }
    console.log(`Cliente ${client.id} (usuario ${client['userId']}) vota por: ${candidato}`);
    this.wss.emit('votacion.voto', { candidato, userId: client['userId'] });
  }

  enviarResultados(resultados: any) {
    this.wss.emit('resultados', resultados);
  }

 
}
