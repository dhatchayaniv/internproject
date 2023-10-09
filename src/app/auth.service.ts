// import { Injectable } from '@angular/core';
// import { EmailValidator } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   users: any[] = [
//     {
//       id: 1,
//       name:'Dhatchayani',
//       username:'Dhatchayani',
//       email:'vdhatchayani2003@gmail.com',
//       password:'abcd'
 
//     },{
//       id:1,
//       name:'xyz',
//       username:'xyz',
//       email:'xyz@gmail.com',
//       password:'xyz'
    
//     }
//   ];
//    session:any;
//   constructor() { }

//   login(username:string,email:EmailValidator,password:string){
//     let user =this.users.find((u)=>u.username==username && u.email==email && u.password==password)
//       if(user){
//         this.session=user;
//         localStorage.setItem('session',JSON.stringify(this.session));
//       }
//      return user;
//   }

// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = []; // Remove the hard-coded user data
  session: any;

  constructor() { }

  login(username: string, email: string, password: string) {

    const user = this.users.find(u => u.username === username && u.email === email);

    if (user && user.password === password) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
      return user;
    }

    return null;
  }
}
