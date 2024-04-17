import { GetTokenService } from './get-token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.getUserToken();

  registerForm(body: any): Observable<any> {
    return this._HttpClient.post(`http://localhost:5000/auth/signup`, body);
  }

  login(body: any): Observable<any> {
    return this._HttpClient.post('http://localhost:5000/auth/login', body);
  }
  logout(): Observable<any> {
    return this._HttpClient.patch(`http://localhost:5000/auth/logout`, {
      headers: this.token,
    });
  }

  //{authorization: mykey__ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTVhNTA1OTEwYWZlY2UwODJhOTAzOCIsImlzTG9nZ2VkSW4iOnRydWUsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3OTE2NzQ0MCwiZXhwIjoxNjc5MjUzODQwfQ.RlH6tByoNMvzi1lAnt_pJkPS7sqU0cWkWrMRCYGUpLc}

  // getUserData(token: any): Observable<any> {
  //   return this._HttpClient.get('http://localhost:5000/user', token);
  // }
}
