import { PartialType } from '@nestjs/mapped-types';
import { CreateMaquinaElectoralDto } from './create-maquina-electoral.dto';

export class UpdateMaquinaElectoralDto extends PartialType(CreateMaquinaElectoralDto) {
  id: number;
}
