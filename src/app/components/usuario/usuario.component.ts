import { Component, OnInit } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

declare var $: any;
declare var M: any;
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit  {
  usuario = new Usuario() ;
  listaUsuarios: any[] = [];
  usuarioBuscado: any;
  usuarioEliminado: any;

  constructor(private usuarioService : UsuarioService , private router: Router){
  }
  ngOnInit() {
    // Inicializar modales después de que la vista Angular se haya cargado completamente
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    var elems = document.querySelectorAll('.modal2');
    var instances = M.Modal.init(elems, {});
  }

  registro()
  {
    if(this.usuario.nombre != '' && this.usuario.correo != '' && this.usuario.contrasenia != '' && this.usuario.telefono != ''){
      this.usuarioService.crearUsuario(this.usuario.nombre,this.usuario.telefono, this.usuario.correo, this.usuario.contrasenia).subscribe((resusuario: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
        this.router.navigateByUrl('/usuario');
      },
      err => console.error(err)
      );
    }
  }
  listar()
  {
      this.usuarioService.list().subscribe((resusuario: any) =>
      {
        this.listaUsuarios = resusuario;
      },
      err => console.error(err)
      );

  }
  listarOne(id: any) {
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
  
}
