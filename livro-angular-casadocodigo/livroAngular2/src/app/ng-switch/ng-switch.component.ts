import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  numero: number = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementarNumero() {
    this.numero++;
  }

}
