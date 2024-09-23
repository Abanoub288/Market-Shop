import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartProducts: any[] = [];

  ngOnInit(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartProducts = JSON.parse(savedCart);
      this.cartProducts = this.cartProducts.map(product => {
        return {
          ...product,
          quantity: product.quantity || 1
        };
      });
    }
  }

  getCartTotal(): number {
    return this.cartProducts.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartProducts = this.cartProducts.map(product => {
      if (product.id === productId) {
        product.quantity = quantity;
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  removeFromCart(productId: number) {
    this.cartProducts = this.cartProducts.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}






