import { PaginationService } from './../../core/services/pagination.service';
import { ITableHeader } from './../../core/models/i-table-header';
import { ITableData } from './../../core/models/i-table-data';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortService } from '../../core/services/sort.service';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { TableBodyComponent } from '../table-body/table-body.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { Ticket } from '../../core/models/ticket';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [CommonModule,TableHeaderComponent ,TableBodyComponent ,PaginationComponent],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css'
})
export class GridViewComponent implements OnInit {
constructor(private c: ChangeDetectorRef ,private paginatedData :PaginationService ,private sort :SortService){

}
//data on reload page
  ngOnInit(): void {
    this.tickets= this.paginatedData.paginateDate(1,this.tableData)
  }

@Input() tableData :ITableData | any  ;
tickets :Ticket[] |any
language :boolean =true;
sortByThisHeader :ITableHeader |any

ChangeLanguage(){
  this.tableData.language = !this.tableData.language;
  this.language =this.tableData.language
}
//data when pagination
handlePaginatedData(page_number:number) {
this.tickets= this.paginatedData.paginateDate(page_number,this.tableData)
this.c.detectChanges();
}
//data after sorting
handelSortHeader(header:any){
  this.sortByThisHeader=header;
  this.tickets= this.sort.sortColumn(this.sortByThisHeader ,this.tableData);
}
}
