import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sortIcon]',
  standalone: true
})
export class SortIconDirective {

  @Input('sortIcon') appSortIndicator: string | undefined;

  @HostBinding('class.bi-arrow-down')
  get isArrowDown() {
    return this.appSortIndicator === 'asc';
  }

  @HostBinding('class.bi-arrow-up')
  get isArrowUp() {
    return this.appSortIndicator === 'desc';
  }

  @HostBinding('class.bi-arrow-down-up')
  get isArrowDownUp() {
    return !this.isArrowDown && !this.isArrowUp;
  }
}






