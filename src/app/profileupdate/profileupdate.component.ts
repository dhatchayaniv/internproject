import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent {
  formDataForm: FormGroup;


  constructor(private formBuilder: FormBuilder,private userService: UserService) {
    
    this.formDataForm = this.formBuilder.group({
      username: [''],
      email: [''],
      address: [''],
      password: [''],
      changePassword: [''],
      gender: [''],
      age: [''],
    });

 
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.formDataForm.patchValue(JSON.parse(savedData));
    }
  }

  saveFormData() {

    const userDetail = {
      username: this.formDataForm.get('username')?.value || '',
      email: this.formDataForm.get('email')?.value || '',
     
      password:this.formDataForm.get('password')?.value || ''
   
    };
   
    localStorage.setItem('formData', JSON.stringify(this.formDataForm.value));
    alert('Form data is updated');
    this.userService.updateUserDetails(userDetail);
  }
}
