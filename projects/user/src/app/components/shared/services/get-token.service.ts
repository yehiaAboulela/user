import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetTokenService {
  getUserToken(): any {
    return localStorage.getItem('token');
  }
}
