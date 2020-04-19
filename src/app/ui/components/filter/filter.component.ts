import { Component, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('panelInOut', [
      state('true' , style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('1 => 0', animate('400ms')),
      transition('0 => 1', animate('400ms'))
    ])
  ],
  host: {
    '(document:click)': 'this.handleClickOutsideDropdown($event)',
  },
})
export class FilterComponent implements OnInit {

  @Input() title: string;
  @Input() filterList: Array<{name: string, active: boolean, type: string}>;
  @Input() isAbsolute: boolean = false;
  @Input() isMultiple: boolean = false;
  @Output() onFilterChange = new EventEmitter();
  public isFilterOpened: boolean = false;
  public activeFilter: string = '';
  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  public openFilter() {
    this.isFilterOpened = !this.isFilterOpened;
  }

  public selectFilter(filter: {name: string, active: boolean, type: string}) {
    if (this.isAbsolute) {
      this.openFilter();
      this.filterList.forEach(filter => filter.active = false);
      this.activeFilter = filter.name;
    }
    filter.active = !filter.active;
    if (this.isMultiple) {
     const filterList = this.filterList.map(filter => {
       if (filter.active) {
         return filter.type
       }
     }).filter(filter => filter);
     this.onFilterChange.emit(filterList)
    } else {
      this.onFilterChange.emit(filter.type)
    }
  }

  public handleClickOutsideDropdown(e) {
    if (!this._eref.nativeElement.contains(e.target) && this.isAbsolute) {
      this.isFilterOpened = false;
    }
  }
}
