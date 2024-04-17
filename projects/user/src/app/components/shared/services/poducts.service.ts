import { GetTokenService } from './get-token.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.getUserToken();

  // getProducts(): Observable<any> {
  //   return this._HttpClient.get(`http://localhost:5000/product`, {
  //     headers: this.token,
  //   });
  // }
  getProducts(): Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products`);
  }

  getCat(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/categories');
  }
  getSpecificCategory(name: string): Observable<any> {
    return this._HttpClient.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
  }
  getSpecificProduct(id: string): Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}
