import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../core/services/login.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginService,
    public bsModalRef: BsModalRef,
    private router: Router
  ) {}

  loginForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  private destroy$ = new Subject();

  ngOnInit(): void {
    const { username, password } = this.loginService.getLoginData();

    this.usernameCtrl = new FormControl(username ? username : '', [
      Validators.minLength(2),
      Validators.required
    ]);
    this.passwordCtrl = new FormControl(password ? password : '', [
      Validators.minLength(6),
      Validators.required
    ]);
    this.loginForm = new FormGroup({});
    this.loginForm.addControl('username', this.usernameCtrl);
    this.loginForm.addControl('password', this.passwordCtrl);

    this.usernameCtrl.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(
        (value: string) => {
          this.loginService.setUsername(value);
        },
        err => console.log(err)
      );

    this.passwordCtrl.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(
        (value: string) => {
          this.loginService.setPassword(value);
        },
        err => console.log(err)
      );
  }

  login(): void {
    const { username, password } = this.loginForm.value;
    this.loginService.login({username, password}).subscribe(() => {
      this.bsModalRef.hide();
      this.router.navigate(['']);
    }, err => console.log(err));
  }

  register(): void {
    this.bsModalRef.hide();
    this.router.navigate(['/registration']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
