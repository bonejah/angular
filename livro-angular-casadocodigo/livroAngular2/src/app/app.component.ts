import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 2';
  foto: string = 'favicon.ico';

  msgAlerta() {
    alert('Você clicou no botao');
  }
}
