import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  imageSource = 'https://angular.io/assets/images/logos/angular/angular.svg';
  public productList:any=[];
  constructor(){
    this.productList = [{
      id:'img',
      img:'https://tse3.mm.bing.net/th?id=OIP.BUk9gI5IkSumf71yBrFUvgHaLg&pid=Api&P=0&h=180',
      title:'Ring',
      price:'100.10'
    },
    {
     id:'img',
     img:'https://tse4.mm.bing.net/th?id=OIP.scG3l4LvQpMz08cLcM4FKwHaHa&pid=Api&P=0&h=180',
     title:'Remote Aeroplane',
     price:'250.02'
 },
    {
     id:'img',
     img: 'https://tse4.mm.bing.net/th?id=OIP.s9FLABsZY4NY-l0NRalsKQHaE8&pid=Api&P=0&h=180',
     title:'Mini Kitchen',
     price:'140.08'
    },
    {
      id:'img',
      img:'https://tse4.mm.bing.net/th?id=OIP.mNb9LNQROX0PJdiJVqUABQHaGH&pid=Api&P=0&h=180',
      title:'Tiny dragon',
      price:'300.08'
    },
    {
      id:'img',
      img:'https://tse4.mm.bing.net/th?id=OIP.SGM_Nz-VjFE6VintLzQuqAHaHa&pid=Api&P=0&h=180',
      title:'Dancing Bunny',
      price:'500.08',
    },
    {
      id:'img',
      img:'https://tse3.mm.bing.net/th?id=OIP.hlltF8FpzoZqioPqlLTGswHaHa&pid=Api&P=0&h=180',
      title:'Vegetables',
      price:'234.08',
    },
    {
      id:'img',
      img:'https://i5.walmartimages.com/seo/Ty-Barley-the-Dog-Classic_daef84fd-5d2a-4ddd-8783-1437bbb53fe6_1.eb7203114ecf9767b8d24d109fd1a1f3.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
      title:'Barking Puppy',
      price:'760.08',
    },
    {
      id:'img',
      img:'https://tse1.mm.bing.net/th?id=OIP.1ENfZOQpmrrJ45VYzt6vMgHaFj&pid=Api&P=0&h=180',
      title:'Bead Ladder',
      price:'450.08'
    },
    {
       id:'img',
       img:'https://tse1.mm.bing.net/th?id=OIP.Kn9R4y1tbPy_xeMBgLqbQAHaHa&pid=Api&P=0&h=180',
       title:'Riding Child',
       price:'890.08'
    },
    {
      id:'img',
      img:'https://tse1.mm.bing.net/th?id=OIP.tSBQjloduqR-IRvvscbKqgHaFk&pid=Api&P=0&h=180',
      title:'Musical Piano for Kids',
      price:'550.08'
    },
    {
      id:'img',
      img:'https://tse2.mm.bing.net/th?id=OIP.AwhzvWR7n6dAJ-f9e4AqFwHaHa&pid=Api&P=0&h=180',
      title:'Robot for Kids',
      price:'1230.00'
    },
    {
      id:'img',
      img:'https://tse4.mm.bing.net/th?id=OIP.J2opsR6uj4iRS4arnQtzOAAAAA&pid=Api&P=0&h=180',
      title:'Persian Cat',
      price:'230.00'
    },
    {
      id:'img',
      img:'https://tse1.mm.bing.net/th?id=OIP.t70_FjupB6vIAYpziInVkAHaE8&pid=Api&P=0&h=180',
      title:'Wooden train',
      price:'830.90'
    },
    {
      id:'img',
      img:'https://tse2.mm.bing.net/th?id=OIP.ckBvfZk-f-TUDucZZ_JTSgHaHm&pid=Api&P=0&h=180',
      title:'Block Shapes',
      price:'530.90'
    },
    {
      id:'img',
      img:'https://i.ebayimg.com/thumbs/images/g/FdYAAOSwk1haOiyl/s-l225.webp',
      title:'Riding Horse',
      price:'650.90'
    }
]
  }
  i:number = 0;
}


