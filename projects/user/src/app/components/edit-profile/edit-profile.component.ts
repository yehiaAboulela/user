import { jwtDecode } from 'jwt-decode';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  constructor(private _UserService: UserService) {}
  token = { authorization: `mykey__ ${localStorage.getItem('token')}` };

  ngOnInit() {
    // jwtDecode(this.token.authorization);
    // this._UserService.getAllUsers(this.token).subscribe({
    //   next: (res) => {
    //     console.log('all users ya ahmed ---------------------------', res);
    //   },
    // });
    // this._UserService.getUser(this.token).subscribe({
    //   next: (res) => {
    //     console.log('current users ya ahmed ---------------------------', res);
    //   },
    // });
  }
}
