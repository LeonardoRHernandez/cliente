import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

list() {
  return this.http.get(`${environment.API_URI}/Administradores/mostrarAdministradores`);
}

listOne(id : any) {
  return this.http.get(`${environment.API_URI}/Administradores/mostrarAdministrador/${id}`);
}

existeA(correo : any, password : any){ 
  return this.http.post(`${environment.API_URI}/Administradores/iniciarSesionA/`, {"correo":correo, "contrasenia":password});
}

crearAdministrador(nombre : any,telefono : any, correo : any, contrasenia : any){ 
  return this.http.post(`${environment.API_URI}/Administradores/crearAdministrador/`, {"nombre": nombre,"telefono": telefono, "correo":correo, "contrasenia":contrasenia});
}

eliminarAdministrador(id : any){ 
  return this.http.delete(`${environment.API_URI}/Administradores/eliminarAdministradores/${id}`);
}
}
