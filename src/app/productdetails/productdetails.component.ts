import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; 

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
    
    name: this.product.name,
    price: this.product.price,
    image: this.product.image
  };

  const existingCartString = localStorage.getItem('cart');
  const existingCart = existingCartString ? JSON.parse(existingCartString) : [];

  const isProductInCart = existingCart.some((item: { name: any; }) => item.name === this.product.name);

  if (!isProductInCart) {
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
  } else {
    alert('Product is already in the cart');
  }

  console.log('Add to Cart button clicked');
  this.router.navigate(['/cart']);
}

buyproduct(){
  alert("Add the product to cart!")
}
}
