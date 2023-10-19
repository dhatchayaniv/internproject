// cart.component.ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: any; 

  cartItems: any[] = [];

  ngOnInit() {
     this.loadCartItems();
  }

  loadCartItems() {
    const storedCartString = localStorage.getItem('cart');
    this.cartItems = storedCartString !== null ? JSON.parse(storedCartString) : [];
    
    
    this.cartItems.forEach(item => {
      item.quantity = 1;
    });
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  removeItem(index: number) {
    if (confirm('Are you sure you want to remove this item from the cart?')) {
      this.cartItems.splice(index, 1);
      
      this.updateCartStorage();
    }
  }

  updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  buy(){
    alert("Thanks for Shopping!")
  }
}



