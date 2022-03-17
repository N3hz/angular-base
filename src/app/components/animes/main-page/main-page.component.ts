import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  personajes : Personaje[] = [{
    id: 1,
    nombre : 'Nagato Yuki',
    edad : 18
  }];

  constructor() {

  }

  ngOnInit(): void {
  }

  nuevoPersonaje : Personaje = {
    id : 0,
    nombre : '',
    edad   : 0,
  }

  agregarNuevoPersonaje( argumento : Personaje ){
    if(this.personajes.length>0){
      argumento.id = this.personajes.sort( x => x.id )[0].id + 1;
    }else{
      argumento.id = 0;
    }

    this.personajes.push(argumento);
  }

  borrarPersonaje(id : number){
    var borrar = this.personajes.findIndex(x => x.id==id);
    this.personajes.splice(borrar,1);
  }

}
