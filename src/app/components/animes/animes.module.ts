import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajeComponent,
    AgregarPersonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AnimesModule { }
