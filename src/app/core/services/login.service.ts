import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private credentials: { username: string, password: string } = {username: '', password: ''};

  constructor(private http: HttpClient) {
  }

  getLoginData() {
    return this.credentials;
  }

  setUsername(username: string) {
    this.credentials.username = username;
  }

  setPassword(password: string) {
    this.credentials.password = password;
  }

  login(dto: any) {
    return this.http.post('/proxy/auth/signin', dto)
  }

  register(dto: any): Observable<any> {
    return this.http.post('/proxy/auth/signup', dto)
  }
 }
