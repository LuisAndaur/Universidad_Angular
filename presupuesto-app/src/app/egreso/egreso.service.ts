import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso("Ropa", 500),
        new Egreso("Nafta", 4500)
    ]

    eliminar(egreso){
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}