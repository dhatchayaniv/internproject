import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  {path:'cart',component:CartComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductdetailsComponent,
    CartComponent,
    
  
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
   
  ],

  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { }
