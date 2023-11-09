

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    addToCart(product: any) {
        const cartItem = {
          id: product.id,
          name: product.mainname,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
      
        const existingCartString = localStorage.getItem('cart');
        const existingCart = existingCartString ? JSON.parse(existingCartString) : [];
      
        const existingItemIndex = existingCart.findIndex((item: { id: any; }) => item.id === product.id);
      
        if (existingItemIndex !== -1) {
          existingCart[existingItemIndex].quantity++;
        } else {
          existingCart.push(cartItem);
        }
        alert("Item is added to cart")
      
        localStorage.setItem('cart', JSON.stringify(existingCart));
      }

   
      
}
