import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultadoFormulario = new EventEmitter<number>();

  operandoA: number = 0;
  operandoB: number = 0;

  sumar(){
    let suma = this.operandoA + this.operandoB;
    this.resultadoFormulario.emit(suma);
  }
}
