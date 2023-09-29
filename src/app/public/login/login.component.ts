import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { useThemeWithoutDefault } from '@mui/system';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup=this.fb.group({
    username:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]

  });
   constructor(private authService:AuthService,private fb: FormBuilder,private router:Router){

    
   }





        login(){

        let user= this.authService.login(
          this.form.value.username, 
          this.form.value.email, 
          this.form.value.password);

          if(!user){
            alert('Invalid data is provided');
          }
          else{
            this.router.navigateByUrl('/admin');
          }

         

        }    
}
