import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListaHeroesComponent } from './lista-heroes/lista-heroes.component';


@NgModule({
  declarations: [
    HeroeComponent,
    ListaHeroesComponent
  ],
  exports: [
    ListaHeroesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SuperHeroesModule {
  constructor() {
    console.log("Arranca --Módulo superHeroes--");
  }
}
