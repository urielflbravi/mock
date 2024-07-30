import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
  findDocumentsByUc(uc: string) {
    console.log(uc);
    return {
      documentos: [
        {
          titulo: 'Nananana',
          dia_mes: '02/03',
          horario: '03:03',
          data: '05/05/2024',
          caminho: 'path/to/file',
        },
        {
          titulo: 'Nananana',
          dia_mes: '01/04',
          horario: '02:55',
          data: '05/06/2024',
          caminho: 'path/to/file2',
        },
      ],
    };
  }
}
