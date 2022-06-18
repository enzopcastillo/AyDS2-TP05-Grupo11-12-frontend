import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from 'src/app/models/catalogo';

@Component({
  selector: 'app-catalogo-inicio',
  templateUrl: './catalogo-inicio.component.html',
  styleUrls: ['./catalogo-inicio.component.css']
})
export class CatalogoInicioComponent implements OnInit {

  catalogos!: Array<Catalogo>;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verCatalogo(cat: string){
    this.router.navigate(['catalogo/', cat]);
  }
}
