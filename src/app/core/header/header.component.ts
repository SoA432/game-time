import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { BsModalService } from 'ngx-bootstrap';
import { OrderComponent } from '../../ui/modals/order/order.component';
import { LoginComponent } from '../../ui/modals/login/login.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isSearchHidden = true;
  public searchControl: FormControl;
  private destroy$ = new Subject();
  @ViewChild('search') search: ElementRef;
  public currentUser: string = '';
  public isAuthorized: boolean;
  constructor(public cartService: CartService,
              private modalService: BsModalService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(400),
      distinctUntilChanged(),
      filter((val) => val)
    ).subscribe((value: string) => {
      console.log(value);
    });

    this.isAuthorized = localStorage.getItem('authorized') === 'yes';
    this.currentUser = this.isAuthorized ? localStorage.getItem('currentUser') : '';
    this.loginService.authorized$.pipe(
      takeUntil(this.destroy$),
    ).subscribe((value: boolean) => {
      this.isAuthorized = value;
      console.log(' this.isAuthorized', this.isAuthorized);
      this.currentUser = this.isAuthorized ? localStorage.getItem('currentUser') : '';
      console.log(' this.currentUser', this.currentUser);
    });
  }

  public showSearch(): void {
    this.isSearchHidden = !this.isSearchHidden;
    if (!this.isSearchHidden) {
      setTimeout(() => this.search.nativeElement.focus(), 0);
    }
    console.log('show', this.isSearchHidden);
  }

  public openLoginModal() {
    this.modalService.show(LoginComponent, {class: 'login-modal'});
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {

    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
