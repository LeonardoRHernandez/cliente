import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

list() {
  return this.http.get(`${environment.API_URI}/vendedores/mostrarVendedores/`);
}

listOne(id:any) {
  return this.http.get(`${environment.API_URI}/vendedores/mostrarVendedor/${id}`);
}

existeV(correo:any, password:any){ 
  return this.http.post(`${environment.API_URI}/vendedores/iniciarSesionV/`, {"correo":correo, "contrasenia":password});
}

crearVendedor(nombre : any,telefono : any, correo : any, contrasenia : any){ 
  return this.http.post(`${environment.API_URI}/vendedores/crearVendedor/`, {"nombre": nombre,"telefono": telefono, "correo":correo, "contrasenia":contrasenia});
}

eliminarVendedor(id : any){ 
  return this.http.delete(`${environment.API_URI}/vendedores/eliminarVendedor/${id}`);
}

}
