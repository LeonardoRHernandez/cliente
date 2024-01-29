import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CasasService} from './../../services/casas.service';
import { Casas } from 'src/app/models/Casas';

import { ComprasService} from './../../services/compras.service';
import { Compras } from 'src/app/models/Compras';

declare var M: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  casas = new Casas() ;
  listaCasas: any[] = [];
  casaBuscado: any;
  casaEliminado: any;

  compras = new Compras() ;
 constructor(
    private casasService : CasasService,
    private comprasService : ComprasService,
    private router: Router){
  }

  ngOnInit() {
    // Inicializar modales después de que la vista Angular se haya cargado completamente
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

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

  registroCompra()
  {
    if(this.compras.id_casa != 0 && this.compras.id_vendedor != 0 && this.compras.fecha != null && this.compras.id_usuario != 0){
      this.comprasService.crear(this.compras.id_vendedor,this.compras.id_casa, this.compras.fecha, this.compras.id_usuario).subscribe((resvendedor: any) =>
      {
        var modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
      },
      err => console.error(err)
      );
    }
  }

}
