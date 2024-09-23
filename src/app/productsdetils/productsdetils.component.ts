import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-productsdetils',
  templateUrl: './productsdetils.component.html',
  styleUrls: ['./productsdetils.component.css']
})
export class ProductsdetilsComponent implements OnInit {

  productId:any;
  productDetiles:any;

  constructor(private _ActivatedRoute: ActivatedRoute, private _CategoriesService: CategoriesService) {}

  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe((prams)=> {
      this.productId = prams.get('id')
    })

    this._CategoriesService.getProductsDetiles(this.productId).subscribe({
      next: (response) => this.productDetiles = response
    })
  }

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
