import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: any;
  router: any;


  constructor(private route: ActivatedRoute, private productService: ProductService,private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.product = this.productService.getProductById(productId);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log('Add to Cart button clicked');
    this.router.navigate(['/cart']);
    alert("Item is added to cart")
  }
  

buyproduct(){
  alert("Add the product to cart!")
}
}
