// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service a singleton and available throughout the app
})
export class UserService {
  private userDetailsSubject = new BehaviorSubject<any>(null);
  userDetails$ = this.userDetailsSubject.asObservable();

  updateUserDetails(userDetails: any) {
    this.userDetailsSubject.next(userDetails);
  }
  
}

