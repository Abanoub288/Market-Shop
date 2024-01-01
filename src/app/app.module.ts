import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './brand/brand.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsdetilsComponent } from './productsdetils/productsdetils.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    BrandComponent,
    MainsliderComponent,
    ProductsdetilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
