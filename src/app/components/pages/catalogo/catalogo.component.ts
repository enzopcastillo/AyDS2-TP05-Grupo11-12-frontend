import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maquinaria } from 'src/app/models/maquinaria';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  maquinarias!:Array<Maquinaria>;
  action!:boolean;
  categoria!:string;

  constructor(private router:Router ,private rout:ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

  recibirDato(){
    this.rout.params.subscribe((params) => {
      if (params['categoria']) {
        if (params['categoria'] === 'vertodos') {
          this.action = false;
        }
        else {
          this.action = true;
          this.filtrarCategoria(params['categoria']);
          this.categoria = params['categoria'];
        }
      }
    });
  }

  filtrarCategoria(cat:string){

  }

  verMaquinaria(codigo:string){
    
  }
}
