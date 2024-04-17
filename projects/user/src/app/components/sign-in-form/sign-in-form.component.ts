import { AuthService } from './../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _Router: Router,
    private _AuthService: AuthService
  ) {}

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  handleForm() {
    this._Router.navigate(['/products']);
    // this._AuthService.login(this.loginForm.value).subscribe({
    //   next: (response) => {
    //     if (response.message == 'done') {
    //       console.log(response);
    //       localStorage.setItem('token', response.access_token);
    //       this._Router.navigate(['/products']);
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
