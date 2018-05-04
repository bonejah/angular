import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inp-out',
  templateUrl: './inp-out.component.html',
  styleUrls: ['./inp-out.component.css']
})
export class InpOutComponent implements OnInit {
  @Input() menu: string;
  @Output() nomeClicado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarNome(item) {
    this.nomeClicado.emit(item);
  }

}
