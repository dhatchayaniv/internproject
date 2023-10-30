

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]
    ],
    password: ['', Validators.required]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private userService: UserService) {}
  login() {
    const username = this.form.get('username')!.value;
    const email = this.form.get('email')!.value;
    const password = this.form.get('password')!.value;
  
    if (username !== null && email !== null && password !== null) {
      const userDetails = {
        username: username,
        email: email,
        password: password,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }
  
    this.router.navigateByUrl('/admin');
  }
  

  
  
    }
  


