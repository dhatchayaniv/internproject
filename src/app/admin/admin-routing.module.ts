import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';



const routes: Routes = [
  {path:'',component:AdminComponent} ,
  {
    path:'productdetails',component:ProductdetailsComponent
  }             
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  
 }
