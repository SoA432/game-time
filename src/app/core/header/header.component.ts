import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSearchHidden = true;
  public searchControl: FormControl;
  private destroy$ = new Subject();
  @ViewChild('search', {static: false}) search: ElementRef;

  constructor() {
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

  ngOnDestroy(): void {

    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
