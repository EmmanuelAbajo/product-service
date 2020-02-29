import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { 
      path: '', redirectTo: 'register', pathMatch: 'full'
    },
    {
      path: 'register',
      component: RegistrationpageComponent
    },
    {
      path: 'product',
      component: ProductpageComponent,
      children: [
        {path: 'detail',component: ProductTableComponent},
        {path: 'detail/:id',component: ProductDetailComponent}
        
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
