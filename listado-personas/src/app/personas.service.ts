import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [new Persona("Juan", "Perex"), new Persona("Laura", "Juarez"), new Persona("Karla", "Lara")];

    saludar = new EventEmitter<number>();

    constructor(private loggingService:LoggingService){}

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola(`Agregamos a: ${persona.nombre}`);
        this.personas.push(persona);
      }
}