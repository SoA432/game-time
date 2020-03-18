import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private credentials: { email: string, password: string } = {email: '', password: ''};

  constructor() {
  }

  getLoginData() {
    return this.credentials;
  }

  setEmail(email: string) {
    this.credentials.email = email;
  }

  setPassword(password: string) {
    this.credentials.password = password;
  }

  login() {
    console.log(this.credentials);
  }
 }
