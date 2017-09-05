
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://static.omelete.uol.com.br/media/filer_public_thumbnails/filer_public/e3/b0/e3b0a3dc-4603-4e63-bcbc-cd42c334f3c7/09_09_destaque.png__250x250_q85_crop_subsampling-2_upscale.jpg';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
