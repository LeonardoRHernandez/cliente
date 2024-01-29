export class Citas{
    id: number;
    id_casaCita :number;
    id_vendedorCita:number; 
    fecha: Date;
    id_usuarioCita:number;

    constructor() {
        this.id = 0;
        this.id_casaCita = 0;
        this.id_vendedorCita = 0;
        this.fecha = new Date();
        this.id_usuarioCita = 0;

    }
}
