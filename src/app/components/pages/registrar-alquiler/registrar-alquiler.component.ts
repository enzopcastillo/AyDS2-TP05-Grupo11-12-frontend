import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alquiler } from 'src/app/models/alquiler';
import { Cliente } from 'src/app/models/cliente';
import { Maquinaria } from 'src/app/models/maquinaria';
import { AlquilerService } from 'src/app/services/alquiler.service';

@Component({
  selector: 'app-registrar-alquiler',
  templateUrl: './registrar-alquiler.component.html',
  styleUrls: ['./registrar-alquiler.component.css']
})
export class RegistrarAlquilerComponent implements OnInit {
  alquiler!: Alquiler;
  alquileres!: Array<Alquiler>;
  clientes!: Array<Cliente>;
  maquinarias!: Array<Maquinaria>;

  constructor(private alquilerService: AlquilerService) {
    this.alquiler = new Alquiler;
    this.alquileres = new Array<Alquiler>();
    this.clientes = new Array<Cliente>();
    this.maquinarias = new Array<Maquinaria>();
  }

  ngOnInit(): void {
    this.getClientes();
    this.getMaquinarias();
  }

  getClientes(){
    this.alquilerService.getClientes().subscribe(
      (result)=>{
        this.clientes = result;
      }
    )
  }

  getMaquinarias(){
    this.alquilerService.getMaquinarias().subscribe(
      (result)=>{
        this.maquinarias = result;
      }
    )
  }

  getAlquileres(){
    this.alquilerService.getAlquileres().subscribe(
      (result)=>{
        this.alquileres = result;
      }
    )
  }

  createAlquiler(form: NgForm){
    this.alquilerService.createAlquiler(form.value).subscribe(
      (result)=>{
        console.log(result);
      }
    )
  }

  /*
  registrarAlquiler(form: NgForm){
    console.log(form.value);
    this.alquilerService.createAlquiler(form.value).subscribe(
      (result)=>{
        this.getAlquileres();
        this.resetForm(form);
      }
    )
  }
  */

  resetForm(form: NgForm){
    form.reset();
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
