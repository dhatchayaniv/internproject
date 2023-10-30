import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './productdetails/admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './public/landing/landing/landing.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule) },
  { path: 'admin', loadChildren: () => import('./productdetails/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'login', component: LoginComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'userprofile', component: UserProfileComponent },
  {path:'profileupdate',component:ProfileupdateComponent},
  {path:'about',component:AboutComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'contact',component:ContactComponent},
  {path:'landing',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





