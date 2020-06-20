import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap, switchMap, map } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { BsModalService } from 'ngx-bootstrap';
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
      filter((val) => val),
      switchMap((value) => {
        return this.apiService.getAllGames();
      }),
      map((games: GameInterface[]) => {
        return games.filter((game: GameInterface) =>
          game.title.toLocaleLowerCase().includes(this.searchControl.value.toLocaleLowerCase().toString()));
      })
    ).subscribe((games: GameInterface[]) => {
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
  }

  public openLoginModal() {
    this.modalService.show(LoginComponent, {class: 'login-modal'});
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  public navigate(id: string) {
    this.router.navigate([`/detail/${id}`]).then(() => {
      this.showSearch();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
