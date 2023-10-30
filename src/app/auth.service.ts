import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [];
  session: any;

  constructor() {}

  login(username: string, email: string, password: string) {
    const user = this.users.find((u) => u.username === username && u.email === email);

    if (user && user.password === password) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
      return user;
    }

    return null;
  }

  // Define the checkPassword method separately
  checkPassword(enteredPassword: string, storedPassword: string): boolean {
    return enteredPassword === storedPassword;
  }
}
