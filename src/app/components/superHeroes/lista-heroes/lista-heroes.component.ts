import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.scss']
})
export class ListaHeroesComponent implements OnInit {

  heroes: String[] = ['Spider Gwen','Hulk','Gilgamesh','Sprite']
  heroeBorrado : String = ''

  borrarUltimoHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
