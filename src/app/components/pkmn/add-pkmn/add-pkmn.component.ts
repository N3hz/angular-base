import { Component, OnInit, Input } from '@angular/core';
import { Ipkmn } from '../interface/Interface-pkmn';
import { PkmnService } from '../servicios/pkmn.service';

@Component({
  selector: 'app-add-pkmn',
  templateUrl: './add-pkmn.component.html',
  styleUrls: ['./add-pkmn.component.scss']
})
export class AddPkmnComponent implements OnInit {
  error: boolean = false;
  @Input() nuevo : Ipkmn = {
    nombre : '',
    tipo1  : '',
    tipo2  : ''
  }

  agregarPkmn(){
    if(this.pkmnService.agregarPkmn(this.nuevo)){
      this.nuevo = {
        nombre : '',
        tipo1  : '',
        tipo2  : ''
      }
    }else{
      this.error = true;
    }
  }

  limpiarError(){
    this.error = false;
  }

  constructor(private pkmnService : PkmnService ) { }

  ngOnInit(): void {
  }

}
