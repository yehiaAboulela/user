import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { UserData } from './../shared/interfaces/user-data';
import { jwtDecode } from 'jwt-decode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css'],
})
export class NavMainComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  userData: UserData = {} as UserData;
  ngOnInit(): void {
    const myToken: string = localStorage.getItem('token') as '';
    this.userData = jwtDecode(myToken);
  }

  handleLogout() {
    this._Router.navigate(['/signin']);
    //   this._AuthService.logout().subscribe({
    //     next: (response) => {
    //       console.log(response);
    //       // this._Router.navigate(['/signin']);
    //     },
    //     error: (err) => {
    //       console.log(err);

    //     },
    //   });
  }
}
