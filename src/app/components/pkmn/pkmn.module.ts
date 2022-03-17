import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPkmnComponent } from './main-pkmn/main-pkmn.component';
import { PkmnService } from './servicios/pkmn.service';
import { ListPkmnComponent } from './list-pkmn/list-pkmn.component';
import { AddPkmnComponent } from './add-pkmn/add-pkmn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPkmnComponent,
    ListPkmnComponent,
    AddPkmnComponent
  ],
  exports : [
    MainPkmnComponent
  ],
  imports: [
    CommonModule, //ngif ngfor
    FormsModule //Uso de imputs y outputs en formulario
  ],
  providers : [
    PkmnService
  ]
})
export class PkmnModule { }
