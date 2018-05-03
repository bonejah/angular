import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  texto: string;

  constructor() { }

  ngOnInit() {
  }

  meuClick(): void {
    console.log('evento meuClick do botao');
  }

  digitou($event): void {
    console.log($event.target.value);
  }
}
