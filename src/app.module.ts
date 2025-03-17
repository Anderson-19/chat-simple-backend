import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketsModule } from './sockets/sockets.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [SocketsModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
