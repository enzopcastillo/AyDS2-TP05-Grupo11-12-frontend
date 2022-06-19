import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from 'src/app/models/catalogo';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-catalogo-inicio',
  templateUrl: './catalogo-inicio.component.html',
  styleUrls: ['./catalogo-inicio.component.css']
})
export class CatalogoInicioComponent implements OnInit {

  catalogos!: Array<Catalogo>;

  constructor(private router:Router, private catServ:CatalogoService) { 
    this.catalogos = new Array<Catalogo>();
    this.cargarCatalogo();
  }

  ngOnInit(): void {
  }

  verCatalogo(cat: string){
    this.router.navigate(['catalogo/', cat]);
  }

  cargarCatalogo(){
    this.catServ.getCatalogos().subscribe((cat) => {
      console.log(cat);
      for (var i=0; i< cat.length; i++){
        var catalogo = new Catalogo();
        catalogo = cat[i];
        this.catalogos.push(catalogo);
      }
    })

  }
}
