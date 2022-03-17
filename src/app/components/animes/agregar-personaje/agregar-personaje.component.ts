import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss']
})
export class AgregarPersonajeComponent implements OnInit {

  @Input() nuevo : Personaje = {
    id : 0,
    nombre : '',
    edad : 0
  }

  @Output() salida : EventEmitter<Personaje> = new EventEmitter();

  /*
  agregarPersonaje( event : any ){
    event.preventDefault();
  }
  */

  enviarPersonaje( ){

    this.salida.emit(this.nuevo);

    this.nuevo = {
      id : 0,
      nombre : '',
      edad   : 0,
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
