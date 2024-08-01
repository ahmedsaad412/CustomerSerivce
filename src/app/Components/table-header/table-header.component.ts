import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableHeader } from '../../core/models/i-table-header';
import { ITableData } from '../../core/models/i-table-data';
import { Ticket } from '../../core/models/ticket';
import { SortIconDirective } from '../../Directives/sort-icon.directive';
import { SharedModule } from '../../Shared/shared.module';
import { SelectionService } from '../../core/services/selection.service';

@Component({
  selector: '[mytableheader]',
  standalone: true,
  imports: [SharedModule, SortIconDirective],
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent {
  constructor(private selectionService: SelectionService){}
  @Input() options!: ITableData;
  @Input() data!: Ticket[];
  @Input() language: boolean = true;
  @Output() sendHeader: EventEmitter<ITableHeader> = new EventEmitter<ITableHeader>();
  allSelected = false;
  sortDirection: string | undefined;
  currentSortHeader: ITableHeader | undefined;

  sortColumn(header: ITableHeader): void {
    if (this.currentSortHeader === header) {
      // Toggle sort direction if the same header is clicked
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new header and default sort direction
      this.currentSortHeader = header;
      this.sortDirection = 'asc';
    }

    // Update the header's sort direction and emit the event
    header.sortDirection = this.sortDirection;
    this.sendHeader.emit(header);
  }

  isCurrentSortHeader(header: ITableHeader): boolean {
    return this.currentSortHeader === header;
  }
  selectAll(): void {
    if (this.allSelected) {
      this.selectionService.deselectAll();
    } else {
      // Assuming you have a way to get all items on the current page
      const allItemsOnPage = this.getAllItemsOnPage();
      this.selectionService.selectAll(allItemsOnPage);
    }
  }

  isAllSelected(): void {
    this.selectionService.selectedItems$.subscribe(selectedItems => {
      const allItemsOnPage = this.getAllItemsOnPage();
      this.allSelected = allItemsOnPage.every(item => selectedItems.has(item));
    });
  }

  private getAllItemsOnPage(): any[] {
    // Implement logic to return all items on the current page
    return [];
  }
}
