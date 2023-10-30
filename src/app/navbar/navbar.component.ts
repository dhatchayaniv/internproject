import { Component } from '@angular/core';
import { FormDataService } from '../formdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownOpen = false;
  userService: any;
  formDataService: any;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }


    logout() {
  
      this.formDataService.clearFormData();
      this.userService.logout();
    }
}
