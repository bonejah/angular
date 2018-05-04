import { Component, OnInit } from '@angular/core';
import { NomeTecService } from './nome-tec.service';
import { MeuLogService } from './meu-log.service';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {
  tecnologias: string[] = [];

  constructor(private meuService: NomeTecService, private meuAlerta: AlertaService) {
    this.tecnologias = this.meuService.getNomesTec();
    this.meuAlerta.msgAlerta();
  }

  ngOnInit() {
  }

}
