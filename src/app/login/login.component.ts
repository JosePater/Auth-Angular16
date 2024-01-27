import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Formulario para el login
  formularioLogin: FormGroup;

  constructor(private form: FormBuilder) {
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
    console.log('Formulario enviado!:', this.formularioLogin.value);
  }
}
