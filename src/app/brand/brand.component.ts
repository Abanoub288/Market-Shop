import { Component , OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  products:any [] = []

  constructor(private _CategoriesService: CategoriesService) {}

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
