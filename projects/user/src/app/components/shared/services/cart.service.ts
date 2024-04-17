import { GetTokenService } from './get-token.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.getUserToken();
  getCart(): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:5000/cart/addOrRemoveToCard`,
      {
        headers: this.token,
      }
    );
  }
}
