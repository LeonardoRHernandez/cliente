export class Casas{
    id: number;
    nombre :string;
    precio:number; 
    banios: number;
    estacionamiento: number;
    habitaciones: number;
    descripcion :string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.precio = 0;
        this.banios = 0;
        this.estacionamiento = 0;
        this.habitaciones = 0;
        this.descripcion = '';
    }
}

