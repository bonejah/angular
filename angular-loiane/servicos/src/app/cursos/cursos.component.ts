import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  cursosService: CursosService;

  constructor(cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursosService = cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    //this.cursosService.emitirCursoCriado.subscribe(
      //function(curso){
      //  console.log(curso);
      //}
    //  curso => console.log(curso)
    //);

    CursosService.criouNovoCurso.subscribe(
      //curso => console.log(curso)
      curso => this.cursos.push(curso)
    );
  }
}
