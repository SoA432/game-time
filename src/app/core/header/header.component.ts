import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap, switchMap, map } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { BsModalService } from 'ngx-bootstrap';
import { OrderComponent } from '../../ui/modals/order/order.component';
import { LoginComponent } from '../../ui/modals/login/login.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { GameInterface } from '../models/game.interface';

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
  public searchedGames: GameInterface[] = [];
  constructor(public cartService: CartService,
              private modalService: BsModalService,
              private loginService: LoginService,
              private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(() => {
        return this.apiService.getAllGames();
        // return of(['witcher', 'ori and the blind', 'hollow knight', 'a', 'aaaaa', 'afsafasfas']);
      }),
      map((games: GameInterface[]) => {
        return games.filter((game: GameInterface) => game.title.includes(this.searchControl.value.toString()));
      })
      // map((games: []) => {
      //   return games.filter((game: any) => game.includes(this.searchControl.value.toString()));
      // })
    ).subscribe((games: GameInterface[]) => {
      console.log(games);
      this.searchedGames = games;
    });

    this.isAuthorized = localStorage.getItem('authorized') === 'yes';
    this.currentUser = this.isAuthorized ? localStorage.getItem('currentUser') : '';
    this.loginService.authorized$.pipe(
      takeUntil(this.destroy$),
    ).subscribe((value: boolean) => {
      this.isAuthorized = value;
      this.currentUser = this.isAuthorized ? localStorage.getItem('currentUser') : '';
    });
  }

  public showSearch(): void {
    this.isSearchHidden = !this.isSearchHidden;
    if (!this.isSearchHidden) {
      setTimeout(() => this.search.nativeElement.focus(), 0);
    }
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
