import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu: string;
  @Output() nomeClicado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarNome(nome) {
    this.nomeClicado.emit(nome);
  }

}
