import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-module/login/login.component';
import { RegisterComponent } from './auth-module/register/register.component';
import { ProductsListComponent } from './main-products/products-list/products-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardDetailesComponent } from './main-products/card-detailes/card-detailes.component';
const routes: Routes = [
  {
    path:"",
    component:ProductsListComponent
  },
  {
    path: 'register',
   component :RegisterComponent
  },
  {
    path: 'login',
   component :LoginComponent
  },
  {
    path: 'cardDetails/:id',
    component: CardDetailesComponent},

  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
