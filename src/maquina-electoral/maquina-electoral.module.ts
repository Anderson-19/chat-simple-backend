import { Module } from '@nestjs/common';
import { MaquinaElectoralService } from './maquina-electoral.service';
import { MaquinaElectoralGateway } from './maquina-electoral.gateway';

@Module({
  providers: [MaquinaElectoralGateway, MaquinaElectoralService],
})
export class MaquinaElectoralModule {}
