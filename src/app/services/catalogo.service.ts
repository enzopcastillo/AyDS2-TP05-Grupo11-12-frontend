import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  url_catalogos = 'http://localhost:4000/api/catalogos';

  constructor( private http: HttpClient) { }

  /*
  getCatalogos(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.get(this.urlBase, httpOptions);
  }
  */

  getCatalogos(): Observable<any>{
    return this.http.get<Catalogo[]>(this.url_catalogos);
  }
}
