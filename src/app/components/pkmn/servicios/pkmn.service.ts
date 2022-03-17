import { Injectable } from '@angular/core';
import { Ipkmn } from '../interface/Interface-pkmn';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  private _pkmn : Ipkmn[] = [{
    nombre : 'Ivysaur',
    tipo1  : 'Planta',
    tipo2  : 'Veneno'
  }]

  //Los ... evitan enviarlo por referencia
  get listaPkmn() : Ipkmn[] {
    return [...this._pkmn];
  }

  agregarPkmn(newPkmn : Ipkmn): boolean {
      if(newPkmn.nombre!="" && newPkmn.tipo1!=""){
        this._pkmn.push(newPkmn);
        return true;
      }
      return false;
  }

  constructor() {
    console.log('-PkmmService- Inicializado')
  }
}
