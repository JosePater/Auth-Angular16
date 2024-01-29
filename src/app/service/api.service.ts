import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url api
  private urlApi = 'https://koy60.wiremockapi.cloud/login/';

  constructor(private _http: HttpClient) { }

  // Obtener datos
  public getData():Observable<any> {
    return this._http.get<any>(this.urlApi);
  }

  // Enviar post
  public postData(dataUser: any): Observable<any> {
    return this._http.post<any>(`${this.urlApi}`,dataUser);
  }
}
