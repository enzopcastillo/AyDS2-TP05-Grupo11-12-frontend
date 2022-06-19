import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  urlBase = "http://localhost:8080/catalogo"

  constructor( private http: HttpClient) { }

  getCatalogos(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.get(this.urlBase, httpOptions);
  }


}
