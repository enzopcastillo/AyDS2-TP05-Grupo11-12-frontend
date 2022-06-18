import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';
import { Cliente } from '../models/cliente';
import { Maquinaria } from '../models/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  url_clientes = 'http://localhost:8080/clientes/lista';
  url_maquinarias = 'http://localhost:8080/maquinarias/lista';
  url_alquileres = 'http://localhost:8080/alquiler/';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any>{
    return this.http.get<Cliente[]>(this.url_clientes);
  }

  getMaquinarias(): Observable<any>{
    return this.http.get<Maquinaria[]>(this.url_maquinarias);
  }

  getAlquileres(): Observable<any>{
    return this.http.get<Alquiler[]>(this.url_alquileres + 'lista');
  }

  createAlquiler(alquiler: Alquiler): Observable<any>{
    return this.http.post(this.url_alquileres, alquiler + 'guardar');
  }
}
