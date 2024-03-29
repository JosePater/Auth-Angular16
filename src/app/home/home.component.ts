import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {
    // Si no está autenticado regresa al login
    if (!this._auth.getAuth()) {
      this._router.navigate(['/login']);
    }
  }

}
