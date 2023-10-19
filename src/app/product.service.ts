

import { Injectable } from '@angular/core';
import { productData } from './productdetails/productdata'; 

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productDetails: any[];

  constructor() {
    this.productDetails = productData; 
  }

  getProducts() {
    return this.productDetails;
  }

  getProductById(productId: any): any {
    return this.productDetails.find(product => product.id === productId);
  }
}

