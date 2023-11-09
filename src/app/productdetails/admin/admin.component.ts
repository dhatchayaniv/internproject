import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from 'src/app/formdata.service';
import { productData } from '../productdata';
import { CartService } from 'src/app/cart/cart.service';
import { FavoriteService } from 'src/app/favourite/favourite.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  filteredProducts: any[] = [];
  searchTerm: string = '';
  favoriteProducts: any[] = [];


  isDropdownOpen = false;
  userService: any;
  product: any;
  router: any;
  item: any;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

  imageSource = 'https://angular.io/assets/images/logos/angular/angular.svg';
  public productList:any=[];
  constructor(private formDataService: FormDataService, private cartService: CartService, private favoriteService: FavoriteService){
    this.productList = [{
      id:'0',
      image:'https://tse3.mm.bing.net/th?id=OIP.BUk9gI5IkSumf71yBrFUvgHaLg&pid=Api&P=0&h=180',
      mainname:'Ring',
      price:'100.10'
    },
    {
     id:'1',
     image:'https://tse4.mm.bing.net/th?id=OIP.scG3l4LvQpMz08cLcM4FKwHaHa&pid=Api&P=0&h=180',
     mainname:'Remote Aeroplane',
     price:'250.02'
 },
    {
     id:'2',
     image: 'https://tse4.mm.bing.net/th?id=OIP.s9FLABsZY4NY-l0NRalsKQHaE8&pid=Api&P=0&h=180',
     mainname:'Mini Kitchen',
     price:'140.08'
    },
    {
      id:'3',
      image:'https://tse4.mm.bing.net/th?id=OIP.mNb9LNQROX0PJdiJVqUABQHaGH&pid=Api&P=0&h=180',
      mainname:'Tiny dragon',
      price:'300.08'
    },
    {
      id:'4',
      image:'https://tse4.mm.bing.net/th?id=OIP.SGM_Nz-VjFE6VintLzQuqAHaHa&pid=Api&P=0&h=180',
      mainname:'Dancing Bunny',
      price:'500.08',
    },
    {
      id:'5',
      image:'https://tse3.mm.bing.net/th?id=OIP.hlltF8FpzoZqioPqlLTGswHaHa&pid=Api&P=0&h=180',
      mainname:'Vegetables',
      price:'234.08',
    },
    {
      id:'6',
      image:'https://i5.walmartimages.com/seo/Ty-Barley-the-Dog-Classic_daef84fd-5d2a-4ddd-8783-1437bbb53fe6_1.eb7203114ecf9767b8d24d109fd1a1f3.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
      mainname:'Barking Puppy',
      price:'760.08',
    },
    {
      id:'7',
      image:'https://tse1.mm.bing.net/th?id=OIP.1ENfZOQpmrrJ45VYzt6vMgHaFj&pid=Api&P=0&h=180',
      mainname:'Bead Ladder',
      price:'450.08'
    },
    {
       id:'8',
       image:'https://tse1.mm.bing.net/th?id=OIP.Kn9R4y1tbPy_xeMBgLqbQAHaHa&pid=Api&P=0&h=180',
       mainname:'Riding Child',
       price:'890.08'
    },
    {
      id:'9',
      image:'https://tse1.mm.bing.net/th?id=OIP.tSBQjloduqR-IRvvscbKqgHaFk&pid=Api&P=0&h=180',
      mainname:'Musical Piano for Kids',
      price:'550.08'
    },
    {
      id:'10',
      image:'https://tse2.mm.bing.net/th?id=OIP.AwhzvWR7n6dAJ-f9e4AqFwHaHa&pid=Api&P=0&h=180',
      mainname:'Robot for Kids',
      price:'1230.00'
    },
    {
      id:'11',
      image:'https://tse4.mm.bing.net/th?id=OIP.J2opsR6uj4iRS4arnQtzOAAAAA&pid=Api&P=0&h=180',
      mainname:'Persian Cat',
      price:'230.00'
    },
    {
      id:'12',
      image:'https://tse1.mm.bing.net/th?id=OIP.t70_FjupB6vIAYpziInVkAHaE8&pid=Api&P=0&h=180',
      mainname:'Wooden train',
      price:'830.90'
    },
    {
      id:'13',
      image:'https://tse2.mm.bing.net/th?id=OIP.ckBvfZk-f-TUDucZZ_JTSgHaHm&pid=Api&P=0&h=180',
      mainname:'Block Shapes',
      price:'530.90'
    },
    {
      id:'14',
      image:'https://i.ebayimg.com/thumbs/images/g/FdYAAOSwk1haOiyl/s-l225.webp',
      mainname:'Riding Horse',
      price:'650.90'
    },
    {
      id:'15',
      image:'https://tse1.mm.bing.net/th?id=OIP.7IiPs1WYzZFGzMChHB_YcwHaHa&pid=Api&P=0&h=180',
      mainname:'Animal Models',
      price:'950.90'
    }
]
  }
  i:number = 0;

  logout() {
  
    this.formDataService.clearFormData();
    this.userService.logout();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert("Item is added to cart!")
  }

  ngOnInit() {
    this.favoriteProducts = this.favoriteService.getFavoriteProductsFromLocalStorage();
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

  filterProducts(event: any) {
    const searchTerm: string = event.target.value.toLowerCase();
    this.searchTerm = searchTerm;
  
    if (searchTerm === '') {
      this.filteredProducts = [];
    } else {
      
      const matchingProduct = this.productList.find((item: { mainname: string }) =>
        item.mainname.toLowerCase().includes(searchTerm)
      );
  
      this.filteredProducts = matchingProduct ? [matchingProduct] : [];
    }
  }
  
  
  isProductInFavorites(item: any): boolean {
    return this.favoriteProducts.some((favProduct) => favProduct.id === item.id);
  }
  

  
  }  