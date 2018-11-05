import { Component } from '@angular/core';

import { Student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coscurant' },
    { name: 'Leia', isJedi: false },
    { name: 'Han Solo', isJedi: false }
  ];

}
