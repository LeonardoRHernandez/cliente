import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/casas/mostrarCasas`);
  }
  
  listOne(id : any) {
    return this.http.get(`${environment.API_URI}/casas/mostrarCasa/${id}`);
  }
  
  crearCasa(nombre : any,precio : any, banios : any, estacionamiento : any, habitaciones : any, descripcion : any){ 
    return this.http.post(`${environment.API_URI}/casas/crearCasa/`, {"nombre": nombre,"precio": precio, "banios":banios, "estacionamiento":estacionamiento, "habitaciones":habitaciones,"descripcion":descripcion});
  }
  
  eliminarCasa(id : any){ 
    return this.http.delete(`${environment.API_URI}/casas/eliminarCasa/${id}`);
  }

}
