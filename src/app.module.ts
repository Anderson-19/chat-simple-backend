import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketsModule } from './sockets/sockets.module';
import { ApiModule } from './api/api.module';
import { MaquinaElectoralModule } from './maquina-electoral/maquina-electoral.module';

@Module({
  imports: [SocketsModule, ApiModule, MaquinaElectoralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
