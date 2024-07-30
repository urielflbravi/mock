import { Controller, Get, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get(':uc/documentacao')
  remove(@Param('uc') uc: string) {
    return this.clientesService.findDocumentsByUc(uc);
  }
}
