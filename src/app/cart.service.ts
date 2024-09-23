import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private _HttpClient: HttpClient) {}

  cartNewCart(model: any): Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/carts/add', model)
  }
}
