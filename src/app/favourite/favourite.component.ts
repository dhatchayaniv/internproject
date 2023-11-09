
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './favourite.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  favoriteProducts: any[] = [];
 

  constructor(private favoriteService: FavoriteService ,private router: Router,private cartService: CartService) {
  }

  ngOnInit() {
    this.favoriteProducts = this.favoriteService.getFavoriteProductsFromLocalStorage();
  }

  
  updateFavoriteProducts(product: any) {
    if (this.isProductInFavorites(product)) {
      
    } else {
      this.favoriteService.addFavoriteProduct(product);
      this.favoriteProducts.push(product);
      this.favoriteService.saveFavoriteProductsToLocalStorage(this.favoriteProducts);
    }
  }

  addToFavorites(product: any) {
    if (this.isProductInFavorites(product)) {
      alert('Product is already in favorites');
      this.router.navigate(['/favourite']);
    } else {
      this.favoriteService.addFavoriteProduct(product);
      this.favoriteProducts.push(product);
      this.favoriteService.saveFavoriteProductsToLocalStorage(this.favoriteProducts);
      this.router.navigate(['/favourite']);
    }
  }
  
  


  isProductInFavorites(product: any): boolean {
    return this.favoriteProducts.some((favProduct) => favProduct.id === product.id);

  }


  removeItem(index: number) {
    if (confirm('Are you sure you want to remove this item from your favorites?')) {
      this.favoriteProducts.splice(index, 1); // Remove the item from the array
      this.favoriteService.saveFavoriteProductsToLocalStorage(this.favoriteProducts); // Update local storage
    }
  }

  updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(this.favoriteProducts));
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert("Item is added to cart!")
  }
}
