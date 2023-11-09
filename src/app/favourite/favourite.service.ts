import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteProducts: any[] = [];


  constructor(private router: Router) {
    this.favoriteProducts = this.getFavoriteProductsFromLocalStorage();

  }

  getFavoriteProducts() {
    return this.favoriteProducts;
  }

  addFavoriteProduct(product: any) {
    this.favoriteProducts.push(product);
    this.saveFavoriteProductsToLocalStorage(this.favoriteProducts);
    alert("Item is added to favourites!")

  }



  saveFavoriteProductsToLocalStorage(products: any[]) {
    localStorage.setItem('favoriteProducts', JSON.stringify(products));
  }

  getFavoriteProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('favoriteProducts');
    return storedProducts ? JSON.parse(storedProducts) : [];
  }

}
