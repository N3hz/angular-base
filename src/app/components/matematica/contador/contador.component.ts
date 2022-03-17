import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  @Input() base : number = 2;
  titulo : String = 'Contador';
  numero : number = 10;
 
  acumular( valor : number){
    this.numero = this.numero + valor;
  }

  constructor() {
    console.log("Arranca --Componente Contador--");
  }

  ngOnInit(): void {


  }

}
