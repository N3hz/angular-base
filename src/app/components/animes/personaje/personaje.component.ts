import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {

  @Input() personajes : Personaje[] = []

  @Output() salidaBorrado : EventEmitter<number> = new EventEmitter();

  borrarPersonaje(id : number){
      this.salidaBorrado.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
