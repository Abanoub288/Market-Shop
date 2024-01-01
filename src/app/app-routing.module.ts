import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsdetilsComponent } from './productsdetils/productsdetils.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"cart" , component:CartComponent},
  {path:"about" , component:AboutComponent},
  { path:"productdetails/:id" , component:ProductsdetilsComponent},
  {path:"categories" , component:CategoriesComponent},
  {path:"brand" , component:BrandComponent},
  {path:"**" , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
