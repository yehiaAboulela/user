import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _HttpClient: HttpClient) {}

  getUser(token: any): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/user/profile`, {
      headers: token,
    });
  }
  getAllUsers(token: any): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/user`, {
      headers: token,
    });
  }
}
