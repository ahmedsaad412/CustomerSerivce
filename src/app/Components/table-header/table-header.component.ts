import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ITableHeader } from '../../core/models/i-table-header';
import { ITableData } from '../../core/models/i-table-data';
import { SortService } from '../../core/services/sort.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [CommonModule ,TranslateModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.css'
})
export class TableHeaderComponent {
  constructor(private sortService :SortService){}
@Input () tabledata :ITableData |any
@Input () language :boolean =true
@Output() sendHeader: EventEmitter<any> = new EventEmitter<number>();
sortDirection : any
sortColumn(header :ITableHeader){
  this.sendHeader.emit(header)
  this.sortDirection=header.sortDirection
  console.log(this.sortDirection);

}
}
