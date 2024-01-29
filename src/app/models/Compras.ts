export class Compras{
    id: number;
    id_vendedor:number; 
    id_casa :number;
    fecha: Date;
    id_usuario:number;

    constructor() {
        this.id = 0;
        this.id_casa = 0;
        this.id_vendedor = 0;
        this.fecha = new Date();
        this.id_usuario = 0;

    }
}
