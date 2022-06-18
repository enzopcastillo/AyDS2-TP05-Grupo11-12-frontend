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

  constructor(private router:Router) { 
    this.catalogos = new Array<Catalogo>();
    this.cargarCatalogo();
  }

  ngOnInit(): void {
  }

  verCatalogo(cat: string){
    this.router.navigate(['catalogo/', cat]);
  }

  cargarCatalogo(){
    var catalogo = new Catalogo();
    catalogo.categoriaMaquinaria = "Agricola";
    catalogo.codigo = "AG0622";
    catalogo.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Agricultural_machinery.jpg/1200px-Agricultural_machinery.jpg";
    this.catalogos.push(catalogo);
  }
}
