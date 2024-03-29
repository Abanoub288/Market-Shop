import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor(private _HttpClient:HttpClient) { }

  getProducts(): Observable<any> {
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
  }

  getProductsDetiles(id:string): Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }

  getCategories(): Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
}
