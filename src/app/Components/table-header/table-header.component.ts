import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITableHeader } from '../../core/models/i-table-header';
import { ITableData } from '../../core/models/i-table-data';
import { SortService } from '../../core/services/sort.service';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.css'
})
export class TableHeaderComponent {
  constructor(private sortService :SortService){}
@Input () tabledata :ITableData |any
@Input () language :boolean =true
sortColumn(header :ITableHeader){
  this.sortService.sortColumn(header ,this.tabledata);
}
}
