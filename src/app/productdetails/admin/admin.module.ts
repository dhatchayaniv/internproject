import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productData } from '../productdata';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductService } from '../../product.service';
import { CartComponent } from 'src/app/cart/cart.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
