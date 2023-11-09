import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

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
      if (!item.quantity) {
        item.quantity = 1;
      }
    });
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCartStorage();
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.updateCartStorage();
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

  buy() {
    alert('Thanks for Shopping!');
  }
}
