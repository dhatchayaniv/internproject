import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private userDetails: any = {};

  setUserDetails(details: any) {
    this.userDetails = details;
  }

  getUserDetails() {
    return this.userDetails;
  }
}

