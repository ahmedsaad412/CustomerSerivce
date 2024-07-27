import { PagingParameters } from './../core/models/paging-parameters';
import { TranslationService } from './../core/services/translation.service';
import { PaginationService } from '../core/services/pagination.service';
import { ITableHeader } from '../core/models/i-table-header';
import { ITableData } from '../core/models/i-table-data';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortService } from '../core/services/sort.service';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Ticket } from '../core/models/ticket';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';
import { CustomerService } from '../core/services/Customers/customer.service';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [
    TableHeaderComponent,
    TableBodyComponent,
    PaginationComponent,
    SharedModule,
  ],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css',
})
export class GridViewComponent implements OnInit {
  constructor(
    private c: ChangeDetectorRef,
    private paginatedData: PaginationService,
    private sortService: SortService,
    private translationService: TranslationService,
    private translate: TranslateService,
    private customerService: CustomerService
  ) {}
  currentLanguage: string = 'ar';
  @Input() options!: ITableData;
  @Input() data: Ticket[] = [];
  tickets: Ticket[] | any;
  @Input() Url: string = '';
  @Input() mode: string = '';

  language: boolean = true;
  sortByThisHeader: ITableHeader | any;
  pagingParameters: PagingParameters = {
    pageNumber: 1,
    pageSize: 2,
    sortProperty: 'lastname',
    sortDirection: 'asc',
    searchProperty: 'firstname',
    searchText: 'a',
  };
  ngOnInit(): void {
    if (this.mode == 'Server') {
      this.translationService.SetDefaultLanguage(this.currentLanguage);
      this.customerService.getPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.tickets = data.items;
        },
        error: (err) => {
          console.error('Error fetching page data:', err);
        },
      });
    } else {
      this.translationService.SetDefaultLanguage(this.currentLanguage);
      this.tickets = this.sortService.applyDefaultSorting(
        1,
        this.options,
        this.data
      );
    }
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
    this.translationService.SetDefaultLanguage(this.currentLanguage);
    this.c.detectChanges();
  }
  //data when pagination
  handlePaginatedData(page_number: number) {
    if (this.mode == 'Server') {
      this.paginatedData.pageNum = page_number;
      this.customerService.getPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.tickets = data.items;
        },
        error: (err) => {
          console.error('Error fetching page data:', err);
        },
      });
    } else {
      this.tickets = this.paginatedData.paginateDate(
        page_number,
        this.options,
        this.data
      );
    }

    this.c.detectChanges();
  }
  //data after sorting
  handelSortHeader(header: ITableHeader) {
    if (this.mode == 'Server') {
      this.pagingParameters.sortProperty = header.text;
      this.pagingParameters.sortDirection = header.sortDirection;
      this.customerService.getPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.tickets = data.items;
        },
        error: (err) => {
          console.error('Error fetching page data:', err);
        },
      });
    } else {
      this.sortByThisHeader = header;
      this.tickets = this.sortService.sortColumn(
        this.sortByThisHeader,
        this.options
      );
    }

    this.c.detectChanges();
  }

  handleSaveData(updatedData: Ticket) {
    this.tickets.map((a: Ticket) => {
      if (a.id == updatedData.id) {
        return updatedData;
      }
      return a;
    });
    this.c.detectChanges();
  }

  handleDeleteData(id: number) {
    this.tickets = this.tickets.filter((ticket: Ticket) => ticket.id !== id);
    this.c.detectChanges();
    // this.tickets= this.sortService.SortAfterDelete(this.tickets)
  }
}
