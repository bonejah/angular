import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inp-out',
  templateUrl: './inp-out.component.html',
  styleUrls: ['./inp-out.component.css']
})
export class InpOutComponent implements OnInit {
  @Input() menu: string;

  constructor() { }

  ngOnInit() {
  }

}
