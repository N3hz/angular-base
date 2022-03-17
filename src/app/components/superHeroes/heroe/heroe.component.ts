import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  nombre : String = 'Spider Gwen';
  edad   : number = 20;
  url    : String = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.fmovies.cab%2Fimages%2Fchar%2FJtnnX4bWwK6yYj2yMm_dHM_QO7nH_A1oroZqpjiO2uyWtuJW_WqXxLP069VVGHxQTW13qG5qu_k7Jj3_TJ-vdbtAwRip9ZT4hHea5IDq5J8.jpg%3F1&f=1&nofb=1';

  get nombreCapitalizado() : String {
    return this.nombre.toUpperCase();
  }

  saludo() : String {
    return `Hola, soy ${ this.nombre } y tengo ${ this.edad } años!.`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
