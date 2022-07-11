import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquinaria } from '../models/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class MaquinariaService {

  urlBase = "http://localhost:4000/api/maquinarias"

  constructor(private http: HttpClient) { }

  getMaquinarias(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.get(this.urlBase, httpOptions);
  }

  guardarMaquinaria(maq: Maquinaria): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    
    return this.http.post(this.urlBase+"/guardar", maq, httpOptions)
  }
}
