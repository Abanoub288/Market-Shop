import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products:any[] = []

  constructor(private _ProductsServiceService: ProductsServiceService ,
    private _CartService:CartService) {}

  addToCart(productId:string) {
    this._CartService.addToCart(productId).subscribe({
      next:(Response)=> console.log(Response),
      error:(err)=> console.log(err)
    })
  }

  ngOnInit(): void {
    this._ProductsServiceService.getProducts().subscribe({
      next: (res) => this.products = res.data
    })
  }
}
