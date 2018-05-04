import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomeTecService {
  constructor(@Optional() private meulog: MeuLogService) { }

  getNomesTec() {
    if (this.meulog) {
      this.meulog.setLog('consultou o array de tecnologias');
    }

    return ['Angular2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Desenvolvimento com Angular 2'];
  }

}
