import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailComponent } from './productdetail/productdetail.component';



@NgModule({
  declarations: [PagesComponent, RegistrationpageComponent, ProductdetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }
