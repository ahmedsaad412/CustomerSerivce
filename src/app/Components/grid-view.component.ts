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


@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [CommonModule,TableHeaderComponent ,TableBodyComponent ,PaginationComponent ,TranslateModule],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css'
})
export class GridViewComponent implements OnInit {
constructor(private c: ChangeDetectorRef ,private paginatedData :PaginationService ,private sortService :SortService ,private translationService:TranslationService,private translate :TranslateService){
}
currentLanguage: string = 'ar';
//data on reload page
  ngOnInit(): void {
    this.translationService.SetDefaultLanguage(this.currentLanguage)
    this.tickets= this.sortService.applyDefaultSorting(1,this.tableData)
  }
@Input() tableData :ITableData | any  ;
tickets :Ticket[] |any
language :boolean =true;
sortByThisHeader :ITableHeader |any

toggleLanguage(): void {
  this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
  this.translationService.SetDefaultLanguage(this.currentLanguage)

  this.c.detectChanges();
}
//data when pagination
handlePaginatedData(page_number:number) {
this.tickets= this.paginatedData.paginateDate(page_number,this.tableData)
this.c.detectChanges();
}
//data after sorting
handelSortHeader(header:ITableHeader){
  this.sortByThisHeader=header;
  this.tickets= this.sortService.sortColumn(this.sortByThisHeader ,this.tableData);
  this.c.detectChanges();
}

handleSaveData(updatedData: Ticket) {

  this.tickets.map((a:Ticket)=>{
    if(a.id==updatedData.id){
      return updatedData
    }
    return a;
  });
  this.c.detectChanges();
}

handleDeleteData(id :number){
  this.tickets= this.tickets.filter((ticket:Ticket) => ticket.id !== id);
  this.c.detectChanges();
 // this.tickets= this.sortService.SortAfterDelete(this.tickets)
}
}
