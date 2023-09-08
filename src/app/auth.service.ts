import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      name:'Dhatchayani',
      username:'Dhatchayani',
      email:'vdhatchayani2003@gmail.com',
      password:'abcd'
 
    },{
      id:1,
      name:'xyz',
      username:'xyz',
      email:'xyz@gmail.com',
      password:'xyz'
    
    }
  ];
   session:any;
  constructor() { }

  login(username:string,email:EmailValidator,password:string){
    let user =this.users.find((u)=>u.username==username && u.email==email && u.password==password)
      if(user){
        this.session=user;
        localStorage.setItem('session',JSON.stringify(this.session));
      }
     return user;
  }

}
