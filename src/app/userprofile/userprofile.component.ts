import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails: any;
  wrongPassword: boolean = false;
  form: FormGroup;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      this.userDetails = JSON.parse(storedUserDetails);
      this.userService.userDetails$.subscribe((userDetails) => {
        if (userDetails) {
          this.userDetails = userDetails;
        }
      });
    }
  }

  updateEnteredPassword(event: Event) {
    this.form.controls['password'].setValue((event.target as HTMLInputElement).value);
  }



  checkPassword() {
    const enteredPassword = this.form.controls['password'].value;

    
  if (!enteredPassword) {
    alert('Password is required. Please enter a password.');
    return;
  }
  
    if (this.authService.checkPassword(enteredPassword, this.userDetails.password)) {
      this.wrongPassword = false;
      this.router.navigate(['/profileupdate']); 
    } else {
      this.wrongPassword = true;
      alert('Incorrect password. Please try again.');
    }
  }
  
  
}
