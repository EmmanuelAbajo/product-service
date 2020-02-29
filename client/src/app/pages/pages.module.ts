import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { FormsModule } from '@angular/forms';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [PagesComponent, RegistrationpageComponent, ProductpageComponent, ProductTableComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }
