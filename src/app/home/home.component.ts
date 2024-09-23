import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];

  constructor(private _CategoriesService: CategoriesService,) { }

  ngOnInit(): void {
    this._CategoriesService.getAll().subscribe({
      next: (Response) => this.products = Response.products
    })
  }

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }


}
