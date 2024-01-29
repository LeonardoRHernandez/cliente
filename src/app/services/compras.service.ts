import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(`${environment.API_URI}/compras/mostrarCompra`);
  }
  listarUno(id : any) {
    return this.http.get(`${environment.API_URI}/compras/mostrarCompra/${id}`);
  }
  crear(id_vendedor : any,id_casa : any, fecha : any, id_usuario : any){ 
    return this.http.post(`${environment.API_URI}/compras/crearCompra/`, {"id_vendedor": id_vendedor,"id_casa": id_casa, "fecha":fecha, "id_usuario":id_usuario});
  }
}
