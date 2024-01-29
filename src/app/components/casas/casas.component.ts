import { Component, OnInit } from '@angular/core';
import { CasasService } from 'src/app/services/casas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
