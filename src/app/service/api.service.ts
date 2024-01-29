import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginUser, IResponse } from '../models/datauser.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url api
  private urlApi = 'https://koy60.wiremockapi.cloud/login/';

  constructor(private _http: HttpClient) { }

  // Obtener datos
  public getData():Observable<ILoginUser> {
    return this._http.get<ILoginUser>(this.urlApi);
  }

  // Enviar post
  public postData(dataUser: string): Observable<IResponse> {
    return this._http.post<IResponse>(`${this.urlApi}`,dataUser);
  }
}
