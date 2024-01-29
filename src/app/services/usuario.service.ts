import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
providedIn: 'root'
})
export class UsuarioService {
constructor(private http: HttpClient) { }

list() {
  return this.http.get(`${environment.API_URI}/usuarios/mostrarUsuarios`);
}

listOne(id : any) {
  return this.http.get(`${environment.API_URI}/usuarios/mostrarUsuario/${id}`);
}

existe(correo : any, password : any){ 
  return this.http.post(`${environment.API_URI}/usuarios/iniciarSesionU/`, {"correo":correo, "contrasenia":password});
}

crearUsuario(nombre : any,telefono : any, correo : any, contrasenia : any){ 
  return this.http.post(`${environment.API_URI}/usuarios/crearUsuario/`, {"nombre": nombre,"telefono": telefono, "correo":correo, "contrasenia":contrasenia});
}

eliminarUsuario(id : any){ 
  return this.http.delete(`${environment.API_URI}/usuarios/eliminarUsuario/${id}`);
}



}