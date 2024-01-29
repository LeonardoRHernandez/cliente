import { Component, OnInit } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { VendedorService} from './../../services/vendedor.service';
import { Vendedor } from 'src/app/models/Vendedor';

import { AdministradorService} from './../../services/administrador.service';
import { Administrador } from 'src/app/models/Administrador';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario() ;
  vendedor = new Vendedor() ;
  administrador = new Administrador() ;


  constructor(
    private usuarioService: UsuarioService,
    private vendedorService: VendedorService,
    private administradorService: AdministradorService,
    private router: Router
  ) {}


  ngOnInit()
  {

    
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    var elems1 = document.querySelectorAll('.modal1');
    var instances = M.Modal.init(elems1, {});

  
  }

  logueoU()
  {
    this.usuarioService.existe(this.usuario.correo,this.usuario.contrasenia).subscribe((resusuario: any) =>
    {
        localStorage.setItem('correo', resusuario.correo);
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
        this.router.navigateByUrl('/principal');
    },
    err => {
      console.log("error de logueo",err)
    }
    );

  }

  logueoV() {
    this.vendedorService.existeV(this.vendedor.correo, this.vendedor.contrasenia).subscribe(
      (resVendedor: any) => {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
        // Si la consulta es exitosa, redirigir a la URL "/vendedor"
        this.router.navigateByUrl('/vendedor');
      },
      (err) => {
        // Si hay un error en la consulta, imprimir el error en la consola y manejarlo según tus necesidades
        console.log("error de logueo",err);
        // Puedes agregar acciones adicionales aquí en caso de error, si es necesario
      }
    );
  }

  registro()
  {
    if(this.usuario.nombre != '' && this.usuario.correo != '' && this.usuario.contrasenia != '' && this.usuario.telefono != ''){
      this.usuarioService.crearUsuario(this.usuario.nombre,this.usuario.telefono, this.usuario.correo, this.usuario.contrasenia).subscribe((resusuario: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
        this.router.navigateByUrl('/login');
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Usuario Registrado'
      })
      },
      err => console.error(err)
      );
    }
  }

  logueoA() {
    this.administradorService.existeA(this.administrador.correo, this.administrador.contrasenia).subscribe(
      (resAdmin: any) => {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        this.router.navigateByUrl('/administrador');
        modalInstance.close();
        // Si la consulta es exitosa, redirigir a la URL "/vendedor"
        
      },
      (err) => {
        // Si hay un error en la consulta, imprimir el error en la consola y manejarlo según tus necesidades
        console.log("error de logueo",err);
        // Puedes agregar acciones adicionales aquí en caso de error, si es necesario
      }
    );
  }


}

