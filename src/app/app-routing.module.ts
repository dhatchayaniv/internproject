import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
 { path:'',loadChildren: ()=>import('./public/public.module').then((m)=>
 m.PublicModule),},


 { path:'admin',loadChildren: ()=>import('./admin/admin.module').then((m)=>
 m.AdminModule),},


 {
  path: 'login',
  component:LoginComponent,
 },
 {
  path:'productdetails/:id',
  component:ProductdetailsComponent
 }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
