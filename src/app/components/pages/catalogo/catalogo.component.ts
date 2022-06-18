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
  maquinaria!:Maquinaria;

  constructor(private router:Router ,private rout:ActivatedRoute) { 
    this.maquinarias = new Array<Maquinaria>();
    this.maquinaria = new Maquinaria();
    this.cargarMaquinaria();
    this.recibirDato();
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

  cargarMaquinaria(){
    var maq = new Maquinaria();
    maq.categoria= "Agricola";
    maq.codigo = "1234";
    maq.modelo = "RT-20184"
    maq.imagen = "https://cdn.motor1.com/images/mgl/mZPoo/s1/4x3/asi-fueron-las-ventas-de-maquinas-agricolas-y-viales-en-2020.webp";
    this.maquinarias.push(maq);
  }

  filtrarCategoria(cat:string){

  }

  verMaquinaria(maqui: Maquinaria){
    this.maquinaria = maqui;
  }
}
