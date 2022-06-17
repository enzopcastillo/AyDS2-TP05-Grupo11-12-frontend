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
  url_backend = 'http://localhost:4000/api/personas';
  
  constructor(private http: HttpClient) {}

  getClientes(): Observable<any>{
    return this.http.get<Cliente[]>(this.url_backend);
  }

  getMaquinarias(): Observable<any>{
    return this.http.get<Maquinaria[]>(this.url_backend);
  }

  getAlquileres(): Observable<any>{
    return this.http.get<Alquiler[]>(this.url_backend);
  }

  createAlquiler(){

  }
}
