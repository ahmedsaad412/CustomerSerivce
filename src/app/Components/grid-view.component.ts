import { PagingParameters } from './../core/models/paging-parameters';
import { TranslationService } from './../core/services/translation.service';
import { PaginationService } from '../core/services/pagination.service';
import { ITableHeader } from '../core/models/i-table-header';
import { ITableData } from '../core/models/i-table-data';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { SortService } from '../core/services/sort.service';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Ticket } from '../core/models/ticket';

import { SharedModule } from '../Shared/shared.module';
import { CustomerService } from '../core/services/Customers/customer.service';
import TableOptions from '../core/TableOptions';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Filter } from '../core/models/filter';
@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [
    TableHeaderComponent,
    TableBodyComponent,
    PaginationComponent,
    SharedModule,
    ReactiveFormsModule
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
    private customerService: CustomerService,
  ) {}
  totalPages!: number;
  currentLanguage: string = 'ar';
  @Input() options!: ITableData;
  @Input() data: Ticket[] = [];
  tickets: Ticket[] | any;
  totalRecords !:number
  @Input() Url: string = '';
  @Input() mode: string = '';
  systemMode :string=''
  language: boolean = true;
  sortByThisHeader: ITableHeader | any;
  defultHeader :ITableHeader|any =TableOptions.headers.find(h=>h.sortByDefault=true)

  pagingParameters: PagingParameters = {
    pageNumber: 1,
    pageSize: 2,
    sortProperty: this.defultHeader.text,
    sortDirection: this.defultHeader.sortDirection,
    filters :[]
  };
  ngOnInit(): void {
    if (this.mode == 'Server') {
      this.systemMode="Server"
      this.translationService.SetDefaultLanguage(this.currentLanguage);
      this.customerService.FetchPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.totalRecords=data.totalItemCount;
          this.tickets = data.items;
          this.tickets.forEach((e: any) => {
            console.log(e);
          });
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
  updateFilters(filters: Filter[]) {
    this.pagingParameters.filters = filters;
    console.log(this.pagingParameters.filters );
    if (this.mode == 'Server') {
      this.customerService.FetchPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.totalRecords=data.totalItemCount;
          this.tickets = data.items;
        },
        error: (err) => {
          console.error('Error fetching page data:', err);
        },
      });
    }
    this.c.detectChanges();
  }
  handlePaginatedData(page_number: number) {
    if (this.mode == 'Server') {
      this.pagingParameters.pageNumber = page_number;
      this.customerService.FetchPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.totalRecords=data.totalItemCount;
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
      this.customerService.FetchPage(this.Url, this.pagingParameters).subscribe({
        next: (data) => {
          this.totalRecords=data.totalItemCount;
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
  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
    this.translationService.SetDefaultLanguage(this.currentLanguage);
    this.c.detectChanges();
  }
}
