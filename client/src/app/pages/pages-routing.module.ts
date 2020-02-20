import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


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
      component: ProductdetailComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
