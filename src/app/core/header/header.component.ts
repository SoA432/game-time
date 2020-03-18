import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { BsModalService } from 'ngx-bootstrap';
import { OrderComponent } from '../../ui/modals/order/order.component';
import { LoginComponent } from '../../ui/modals/login/login.component';

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

  constructor(public cartService: CartService,
              private modalService: BsModalService) {
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

  ngOnDestroy(): void {

    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
