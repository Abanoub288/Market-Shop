import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[] = [];

  constructor(private _ProductsServiceService: ProductsServiceService ,
    private _CategoriesService: CategoriesService) {}

  ngOnInit():void {
    this._ProductsServiceService.getCategories().subscribe({
      next:(Response) => this.categories = Response.data
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
        items: 7
      },
    },
    nav: true
  }
}
