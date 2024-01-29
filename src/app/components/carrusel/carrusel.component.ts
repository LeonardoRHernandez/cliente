import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var M: any;

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  user: any;
  cart: any;
  carousel: any;
  data: any[] = [];
  imageUrls: string[] = [];
  currentIndex: number = 0;
  
  constructor(private titleService: Title, private router: Router) { }


  ngOnInit() {
    this.imageUrls=['assets/img/anuncio1.jpg','assets/img/anuncio2.jpg','assets/img/anuncio3.jpg','assets/img/anuncio4.jpg','assets/img/anuncio5.jpg','assets/img/anuncio6.jpg'];

  }
  ngAfterViewInit() {
    setTimeout(() => {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
    }, 0);
  }


}
