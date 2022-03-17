import { Component, OnInit } from '@angular/core';
import { PkmnService } from '../servicios/pkmn.service';

@Component({
  selector: 'app-main-pkmn',
  templateUrl: './main-pkmn.component.html',
  styleUrls: ['./main-pkmn.component.scss']
})
export class MainPkmnComponent implements OnInit {

  //Inyección de Dependencia
  constructor( private pkmnService : PkmnService ) { }

  ngOnInit(): void {
  }

}
