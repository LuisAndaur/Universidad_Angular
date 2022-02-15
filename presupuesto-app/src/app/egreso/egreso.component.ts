import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[] = [];
  @Input() ingresoTotal:number;

  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit() {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminar(egreso){
    this.egresoServicio.eliminar(egreso);
  }

  getPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
