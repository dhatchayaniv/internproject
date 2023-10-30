import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductdetailsComponent } from '../productdetails.component';
import { UserProfileComponent } from 'src/app/userprofile/userprofile.component';
import { AboutComponent } from 'src/app/about/about.component';




const routes: Routes = [
  {path:'',component:AdminComponent} ,
  {
    path:'productdetails',component:ProductdetailsComponent
  }  ,
  {
    path:'',component:UserProfileComponent
  } ,
  {
    path:'',component:AboutComponent
  },          
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  isDropdownOpen = false;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
 }
