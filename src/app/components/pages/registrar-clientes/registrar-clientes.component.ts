import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { AlquilerService } from 'src/app/services/alquiler.service';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent implements OnInit {
  cliente: Cliente;
  clientes: Array<Cliente>;

  constructor(private alquilerService: AlquilerService) {
    this.cliente = new Cliente;
    this.clientes = new Array<Cliente>();
  }

  ngOnInit(): void {
  }

  getClientes(){
    this.alquilerService.getClientes().subscribe(
      (result)=>{
        this.clientes = result;
      }
    )
  }

  registrarCliente(form: NgForm){
    console.log(form.value);
    this.alquilerService.createCliente(form.value).subscribe(
      (result)=>{
        this.getClientes();
        this.resetForm(form);
      }
    )
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
