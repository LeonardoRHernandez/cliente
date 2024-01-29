import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(`${environment.API_URI}/citas/mostrarCitas`);
  }
  listarUno(id : any) {
    return this.http.get(`${environment.API_URI}/citas/mostrarCitas/${id}`);
  }
  crear(id_casaCita : any,id_vendedorCita : any, fecha : any, id_usuarioCita : any){ 
    return this.http.post(`${environment.API_URI}/citas/crearCita/`, {"id_casaCita": id_casaCita,"id_vendedorCita": id_vendedorCita, "fecha":fecha, "id_usuarioCita":id_usuarioCita});
  }
  eliminar(id:any) {
    return this.http.delete(`${environment.API_URI}/citas/eliminarCita/${id}`);
  }

}



