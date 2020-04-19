import { switchMap, catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private credentials: { username: string, password: string } = {username: '', password: ''};
  public authorized$ = new Subject();
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
    return this.http.post('/proxy/auth/signin', dto).pipe(
      tap(res => {
        localStorage.setItem('accessToken', res['accessToken']);
        localStorage.setItem('currentUser', res['username']);
        localStorage.setItem('authorized', 'yes');
        this.authorized$.next(true);
      }),
    );
  }

  register(dto: any): Observable<any> {
    return this.http.post('/proxy/auth/signup', dto);
  }
 }
