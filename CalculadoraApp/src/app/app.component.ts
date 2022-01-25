import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Aplicación de Calculadora";
  
  resultadoObtenido: number = 0;


  resultadoPadre(resultado: number):void{
    this.resultadoObtenido = resultado;
  }
}

