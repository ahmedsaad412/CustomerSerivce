import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private selectedItemsSubject = new BehaviorSubject<Set<any>>(new Set());
  selectedItems$ = this.selectedItemsSubject.asObservable();

  private selectedItems = new Set<any>();

  getSelectedItems(): Set<any> {
    return this.selectedItems;
  }

  selectItem(item: any): void {
    this.selectedItems.add(item);
    this.selectedItemsSubject.next(new Set(this.selectedItems));
  }

  deselectItem(item: any): void {
    this.selectedItems.delete(item);
    this.selectedItemsSubject.next(new Set(this.selectedItems));
  }

  selectAll(items: any[]): void {
    this.selectedItems = new Set(items);
    this.selectedItemsSubject.next(new Set(this.selectedItems));
  }

  deselectAll(): void {
    this.selectedItems.clear();
    this.selectedItemsSubject.next(new Set(this.selectedItems));
  }
}
