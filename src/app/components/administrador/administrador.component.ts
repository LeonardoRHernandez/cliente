import { Component, OnInit } from '@angular/core';
import {AdministradorService } from './../../services/administrador.service';
import { Administrador } from 'src/app/models/Administrador';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CitasService } from 'src/app/services/citas.service';
import { Citas } from 'src/app/models/Citas';

import { VendedorService} from './../../services/vendedor.service';
import { Vendedor } from 'src/app/models/Vendedor';

import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';

import { CasasService} from './../../services/casas.service';
import { Casas } from 'src/app/models/Casas';

import { ComprasService} from './../../services/compras.service';
import { Compras } from 'src/app/models/Compras';

declare var $: any;
declare var M: any;


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  vendedor = new Vendedor() ;
  listaVendedor: any[] = [];
  vendedorBuscado: any;
  vendedorEliminado: any;

  citas = new Citas() ;
  listaCitas: any[] = [];
  citaBuscado: any;
  citaEliminado: any;

  usuario = new Usuario() ;
  listaUsuarios: any[] = [];
  usuarioBuscado: any;
  usuarioEliminado: any;

  administrador = new Administrador() ;
  listaAdministrador: any[] = [];
  administradorBuscado: any;
  administradorEliminado: any;

  casas = new Casas() ;
  listaCasas: any[] = [];
  casaBuscado: any;
  casaEliminado: any;

  compras = new Compras() ;
  listaCompras: any[] = [];
  compraBuscado: any;

  constructor(
    private administradorService: AdministradorService,
    private citasService : CitasService,
    private vendedorService: VendedorService,
    private usuarioService : UsuarioService,
    private casasService : CasasService,
    private comprasService : ComprasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    var elems1 = document.querySelectorAll('.modal1');
    var instances = M.Modal.init(elems1, {});
  }

  
  registroVendedor()
  {
    if(this.vendedor.nombre != '' && this.vendedor.correo != '' && this.vendedor.contrasenia != '' && this.vendedor.telefono != ''){
      this.vendedorService.crearVendedor(this.vendedor.nombre,this.vendedor.telefono, this.vendedor.correo, this.vendedor.contrasenia).subscribe((resvendedor: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Vendedor Registrado'
      })
      },
      err => console.error(err)
      );
    }
  }
  listarV()
  {
      this.vendedorService.list().subscribe((resvendedor: any) =>
      {
        this.listaVendedor = resvendedor;
      },
      err => console.error(err)
      );

  }
  
  listarOneV(id: any) {
    this.vendedorService.listOne(id).subscribe(
      (resvendedor: any) => {
        this.vendedorBuscado = resvendedor; // Almacena la información del usuario buscado
      },
      (err) => console.error(err)
    );
  }
  eliminarVendedor(id: any) {
    this.vendedorService.eliminarVendedor(id).subscribe(
      (resvendedor: any) => {
        this.vendedorEliminado = "vendedor eliminado"; // 
      },
      (err) => console.error(err)
    );
  }
  Salir(){
    this.router.navigateByUrl('/principal');
  }

  registroCita()
  {
    if(this.citas.id_casaCita != 0 && this.citas.id_vendedorCita != 0 && this.citas.fecha != null && this.citas.id_usuarioCita != 0){
      this.citasService.crear(this.citas.id_casaCita,this.citas.id_vendedorCita, this.citas.fecha, this.citas.id_usuarioCita).subscribe((resvendedor: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
      },
      err => console.error(err)
      );
    }
  }

  listarC()
  {
      this.citasService.listar().subscribe((rescita: any) =>
      {
        this.listaCitas = rescita;
      },
      err => console.error(err)
      );

  }
  listarOneC(id: any) {
    this.citasService.listarUno(id).subscribe(
      (rescita: any) => {
        this.citaBuscado = rescita; // Almacena la información del usuario buscado
      },
      (err) => console.error(err)
    );
  }
  eliminarCita(id: any) {
    this.citasService.eliminar(id).subscribe(
      (rescita: any) => {
        this.citaEliminado = "usuario eliminado"; // 
      },
      (err) => console.error(err)
    );
  }

  registroU()
  {
    if(this.usuario.nombre != '' && this.usuario.correo != '' && this.usuario.contrasenia != '' && this.usuario.telefono != ''){
      this.usuarioService.crearUsuario(this.usuario.nombre,this.usuario.telefono, this.usuario.correo, this.usuario.contrasenia).subscribe((resusuario: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
      },
      err => console.error(err)
      );
    }
  }
  listarU()
  {
      this.usuarioService.list().subscribe((resusuario: any) =>
      {
        this.listaUsuarios = resusuario;
      },
      err => console.error(err)
      );

  }
  listarOneU(id: any) {
    this.usuarioService.listOne(id).subscribe(
      (resusuario: any) => {
        this.usuarioBuscado = resusuario; // Almacena la información del usuario buscado
      },
      (err) => console.error(err)
    );
  }
  eliminarUsuario(id: any) {
    this.usuarioService.eliminarUsuario(id).subscribe(
      (resusuario: any) => {
        this.usuarioEliminado = "usuario eliminado"; // 
      },
      (err) => console.error(err)
    );
  }

  registroA()
  {
    if(this.administrador.nombre != '' && this.administrador.correo != '' && this.administrador.contrasenia != '' && this.administrador.telefono != ''){
      this.administradorService.crearAdministrador(this.administrador.nombre,this.administrador.telefono, this.administrador.correo, this.administrador.contrasenia).subscribe((resadmin: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
      },
      err => console.error(err)
      );
    }
  }
  listarA()
  {
      this.administradorService.list().subscribe((resadmin: any) =>
      {
        this.listaAdministrador = resadmin;
      },
      err => console.error(err)
      );

  }
  listarOneA(id: any) {
    this.administradorService.listOne(id).subscribe(
      (resadmin: any) => {
        this.administradorBuscado = resadmin; // Almacena la información del usuario buscado
      },
      (err) => console.error(err)
    );
  }
  eliminarAdministrador(id: any) {
    this.administradorService.eliminarAdministrador(id).subscribe(
      (resadmin: any) => {
        this.administradorEliminado = "administrador eliminado"; // 
      },
      (err) => console.error(err)
    );
  }

  registroK()
  {
    if(this.casas.nombre != '' && this.casas.precio !=  0 && this.casas.banios != 0 && this.casas.estacionamiento != 0 && this.casas.habitaciones != 0 && this.casas.descripcion != ''){
      this.casasService.crearCasa(this.casas.nombre,this.casas.precio, this.casas.banios, this.casas.estacionamiento, this.casas.habitaciones, this.casas.descripcion).subscribe((rescasas: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
      },
      err => console.error(err)
      );
    }
  }
  listarK()
  {
      this.casasService.list().subscribe((rescasas: any) =>
      {
        this.listaCasas = rescasas;
      },
      err => console.error(err)
      );

  }
  listarOneK(id: any) {
    this.casasService.listOne(id).subscribe(
      (rescasas: any) => {
        this.casaBuscado = rescasas; // Almacena la información del usuario buscado
      },
      (err) => console.error(err)
    );
  }
  eliminarCasa(id: any) {
    this.casasService.eliminarCasa(id).subscribe(
      (rescasas: any) => {
        this.casaEliminado = "Casa eliminada"; // 
      },
      (err) => console.error(err)
    );
  }
  
  listarCO()
  {
      this.comprasService.listar().subscribe((rescompra: any) =>
      {
        this.listaCompras = rescompra;
      },
      err => console.error(err)
      );

  }
  listarOneCO(id: any) {
    this.comprasService.listarUno(id).subscribe(
      (rescompra: any) => {
        this.compraBuscado = rescompra; // Almacena la información del usuario buscado
      },
      (err) => console.error(err)
    );
  }
  
}
