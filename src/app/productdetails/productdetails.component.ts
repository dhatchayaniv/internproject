import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; 
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: any;
  router: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.product = this.productService.getProductById(productId);
    });
  }

addToCart() {
  const cartItem = {
    id: this.product.id,
    name: this.product.name,
    price: this.product.price,
    image: this.product.image,
    quantity: 0
  };

  const existingCartString = localStorage.getItem('cart');
  const existingCart = existingCartString ? JSON.parse(existingCartString) : [];

  const existingItem = existingCart.find((item: { name: any; }) => item.name === this.product.name);

  if (existingItem) {
    existingItem.quantity++; 
  } else {
    existingCart.push(cartItem);
  }

  localStorage.setItem('cart', JSON.stringify(existingCart));
  console.log('Add to Cart button clicked');
  this.router.navigate(['/cart']);
}


buyproduct(){
  alert("Add the product to cart!")
}
}
