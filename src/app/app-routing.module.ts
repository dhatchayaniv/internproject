import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
 { path:'',loadChildren: ()=>import('./public/public.module').then((m)=>
 m.PublicModule),},


 { path:'admin',loadChildren: ()=>import('./productdetails/admin/admin.module').then((m)=>
 m.AdminModule),},


 {
  path: 'login',
  component:LoginComponent,
 },
 {
  path:'productdetails/:id',
  component:ProductdetailsComponent
 },
 {
  path:'cart/:id',
  component:CartComponent
 }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
