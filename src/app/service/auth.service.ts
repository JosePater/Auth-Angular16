import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authorizedAccess: boolean = false;

  constructor() { }

  getAuth(): boolean {
    return this.authorizedAccess;
  }

  setAuth(value: boolean) {
    this.authorizedAccess = value;
  }

}
