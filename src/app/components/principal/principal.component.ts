import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { Citas } from 'src/app/models/Citas';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CasasService} from './../../services/casas.service';
import { Casas } from 'src/app/models/Casas';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  citas = new Citas() ;
  listaCitas: any[] = [];
  citaBuscado: any;
  citaEliminado: any;

  casas = new Casas() ;
  listaCasas: any[] = [];
  casaBuscado: any;
  casaEliminado: any;

  constructor(
    private citasService : CitasService ,
    private casasService : CasasService,
    private router: Router){
  }
  ngOnInit() {
    // Inicializar modales después de que la vista Angular se haya cargado completamente
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

  }

  registroCita()
  {
    if(this.citas.id_casaCita != 0 && this.citas.id_vendedorCita != 0 && this.citas.fecha != null && this.citas.id_usuarioCita != 0){
      this.citasService.crear(this.citas.id_casaCita,this.citas.id_vendedorCita, this.citas.fecha, this.citas.id_usuarioCita).subscribe((resvendedor: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Cita Agregado'
      })
      },
      err => console.error(err)
      );
    }
  }
  login(){
    this.router.navigateByUrl('/login');
  }
  nosotros(){
    this.router.navigateByUrl('/nosotros');
  }
  carrusel(){
    this.router.navigateByUrl('/carrusel');
  }
  todoCasas(){
    this.router.navigateByUrl('/todo');
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

}
