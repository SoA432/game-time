import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../../core/services/login.service";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginService,
    public bsModalRef: BsModalRef,
    private router: Router
  ) {}

  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  private destroy$ = new Subject();

  ngOnInit(): void {
    const { email, password } = this.loginService.getLoginData();

    this.emailCtrl = new FormControl(email ? email : "", [
      Validators.pattern(
        "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"
      ),
      Validators.required
    ]);
    this.passwordCtrl = new FormControl(password ? password : "", [
      Validators.minLength(6),
      Validators.required
    ]);
    this.loginForm = new FormGroup({});
    this.loginForm.addControl("email", this.emailCtrl);
    this.loginForm.addControl("password", this.passwordCtrl);

    this.emailCtrl.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(
        (value: string) => {
          console.log(value);
          this.loginService.setEmail(value);
        },
        err => console.log(err)
      );

    this.passwordCtrl.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(
        (value: string) => {
          console.log(value);
          this.loginService.setPassword(value);
        },
        err => console.log(err)
      );
  }

  login() {
    this.loginService.login();
  }

  register() {
    this.bsModalRef.hide();
    this.router.navigate(['/registration']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
