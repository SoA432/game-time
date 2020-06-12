import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginService } from "src/app/core/services/login.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl
} from "@angular/forms";
import { Subject } from "rxjs";
import { distinctUntilChanged, takeUntil, switchMap } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {}

  loginForm: FormGroup;
  nameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  repeatPasswordCtrl: FormControl;

  private destroy$ = new Subject();

  ngOnInit(): void {
    this.nameCtrl = new FormControl('', [
      Validators.minLength(2),
      Validators.required
    ]);
    this.emailCtrl = new FormControl('', [
      Validators.pattern(
        "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"
      ),
      Validators.required
    ]);

    this.loginForm = new FormGroup({
      email: this.emailCtrl,
      username: this.nameCtrl,
      passwords: this.formBuilder.group(
        {
          password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
          confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
        },
        { validator: this.passwordConfirming }
      )
    });
  }

  register() {
    const { username, email, passwords } = this.loginForm.value;
    this.loginService.register({username, email, password: passwords.password}).pipe(
      switchMap((res) => {
        return this.loginService.login({username, password: passwords.password})
      })
    ).subscribe(res => {
      console.log(localStorage);
      this.router.navigate(['']);
    }, err => console.log(err));
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirm_password').value) {
      return { invalid: true };
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
