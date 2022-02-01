import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = "";
  apellidoInput: string = "";

  // DECORADOR VIEW CHILD
  // @ViewChild("nombreInput") nombre: ElementRef;
  // @ViewChild("apellidoInput") apellido: ElementRef;

  // constructor(private loggingService:LoggingService,
  //             private personaService:PersonasService){}

  constructor(private personaService:PersonasService){
    this.personaService.saludar.subscribe(
        (indice:number) => alert("El índice es: " + indice)
      );
  }

  //viewChild
  // agregarPersona(){
  //   let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
  //   //this.personas.push(new Persona(this.nombreInput, this.apellidoInput))
  //   // this.loggingService.enviaMensajeAConsola(`Enviamos persona: ${persona1.nombre} ${persona1.apellido}`);
  //   // this.personaCreada.emit(persona1);
  //   this.personaService.agregarPersona(persona1);
  // }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(new Persona(this.nombreInput, this.apellidoInput))
    // this.loggingService.enviaMensajeAConsola(`Enviamos persona: ${persona1.nombre} ${persona1.apellido}`);
    // this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }


  // REFERENCIAS LOCALES PASADAS POR PARAMETROS
  // agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
  //   let persona1 = new Persona(nombreInput.value, apellidoInput.value);
  //   //this.personas.push(new Persona(this.nombreInput, this.apellidoInput))
  //   this.personaCreada.emit(persona1);
  // }

}
