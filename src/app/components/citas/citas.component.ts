import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { Citas } from 'src/app/models/Citas';
import { Router } from '@angular/router';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas = new Citas() ;
  listaCitas: any[] = [];
  citaBuscado: any;
  citaEliminado: any;

  constructor(private citasService : CitasService , private router: Router){
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
        this.router.navigateByUrl('/citas');
      },
      err => console.error(err)
      );
    }
  }

  listar()
  {
      this.citasService.listar().subscribe((rescita: any) =>
      {
        this.listaCitas = rescita;
      },
      err => console.error(err)
      );

  }
  listarOne(id: any) {
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

}
