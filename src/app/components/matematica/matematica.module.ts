import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
  imports: [
    FormsModule
  ]
})
export class MatematicaModule {
  constructor() {
    console.log("Arranca --Módulo Matematica--");
  }
}
