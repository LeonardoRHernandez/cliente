export class Usuario{
    id: number;
    nombre :string;
    telefono:string; 
    correo: string;
    contrasenia: string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.telefono = '';
        this.correo = '';
        this.contrasenia = '';
    }
}