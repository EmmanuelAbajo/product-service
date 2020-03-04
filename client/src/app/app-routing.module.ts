import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('../app/pages/pages.module')
      .then(i => i.PagesModule)
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {path: 'not-found',component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
