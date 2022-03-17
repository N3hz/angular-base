import { Component, OnInit } from '@angular/core';
import { PkmnService } from '../servicios/pkmn.service';

@Component({
  selector: 'app-list-pkmn',
  templateUrl: './list-pkmn.component.html',
  styleUrls: ['./list-pkmn.component.scss']
})
export class ListPkmnComponent implements OnInit {

  get listaPkmn(){
      return this.pkmnService.listaPkmn;
  }

  constructor( private pkmnService : PkmnService ) { }

  ngOnInit(): void {
  }

}
