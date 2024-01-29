import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  datosUsuario = {
    user: '',
    password: ''
  }

  // Formulario para el login
  formularioLogin: FormGroup;

  constructor(private form: FormBuilder, private _apiBanco: ApiService) {
    // usuario vinculado con formControlName="usuario"
    this.formularioLogin = this.form.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  // Validador de campos
  hayErrores(controlName: string, errorType: string) {
    return (
      // true: al tener error del tipo indicado
      this.formularioLogin.get(controlName)?.hasError(errorType) &&
      this.formularioLogin.get(controlName)?.touched // true: al hacer clic al campo
    );
  }

  enviar() {
    this.datosUsuario.user = this.formularioLogin.value.usuario;
    this.datosUsuario.password = this.formularioLogin.value.password;
    console.log('Formulario enviado!:', this.formularioLogin.value);
    this.callLoginApi();
  }

  callLoginApi() {
    // Conversión a JSON
    let datosJson = JSON.stringify(this.datosUsuario)
    console.log(`Datos: ${datosJson}`);

    this._apiBanco.postData(datosJson).subscribe({
      next: (data:any) => {
        console.log("Respuesta api: ",data);
      },
      error: err => console.log('Error: ->',err)
    });
  }

}
