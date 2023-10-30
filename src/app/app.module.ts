import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { LandingComponent } from './public/landing/landing/landing.component';
import { UserService } from './user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './productdetails/admin/admin.component';
import { ContactComponent } from './contact/contact.component';





const routes: Routes = [
  
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  {path:'cart',component:CartComponent},
  {path:'profileupdate',component:ProfileupdateComponent},
  {path:'landing',component:LandingComponent},
  {path:'admin',component:AdminComponent},
  {path:'contact',component:ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductdetailsComponent,
    CartComponent,
    UserProfileComponent,
    ProfileupdateComponent,
    AboutComponent,
    NavbarComponent,
    ContactComponent,
    LandingComponent
    

  
 
    
  
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
   
  ],

  providers: [UserService],
  bootstrap: [AppComponent]

})


export class AppModule { }
