import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[] = [
        new Ingreso("Salario", 1000),
        new Ingreso("Venta coche", 5000),
    ]

    eliimnar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}