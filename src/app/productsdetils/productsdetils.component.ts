import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-productsdetils',
  templateUrl: './productsdetils.component.html',
  styleUrls: ['./productsdetils.component.css']
})
export class ProductsdetilsComponent implements OnInit {

  productId:any;
  productDetiles:any;

  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsServiceService: ProductsServiceService) {}

  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe((prams)=> {
      this.productId = prams.get('id')
    })

    this._ProductsServiceService.getProductsDetiles(this.productId).subscribe({
      next:(response)=> this.productDetiles = response.data,
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
}
