import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maquinaria } from 'src/app/models/maquinaria';
import { MaquinariaService } from 'src/app/services/maquinaria.service';

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

  constructor(private router:Router ,private rout:ActivatedRoute, private maqService: MaquinariaService) { 
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
          this.categoria = params['categoria'];
        }
      }
    });
  }

  cargarMaquinaria(){
    this.maqService.getMaquinarias().subscribe((m)=>{
      for(var i=0; i < m.length; i++){
        var maq = new Maquinaria();
        if(this.action == true){
          if(m[i].categoria === this.categoria){
            maq = m[i];
            this.maquinarias.push(maq);
          }
        }
        else{
          maq = m[i];
          this.maquinarias.push(maq);
        }
      }
    });
  }

  verMaquinaria(maqui: Maquinaria){
    this.maquinaria = maqui;
  }
}
