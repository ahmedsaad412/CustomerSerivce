import { ITableHeader } from './../../core/models/i-table-header';
import { ITableData } from './../../core/models/i-table-data';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortService } from '../../core/services/sort.service';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { TableBodyComponent } from '../table-body/table-body.component';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [CommonModule,TableHeaderComponent ,TableBodyComponent],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css'
})
export class GridViewComponent {
constructor(private sortService :SortService){}
@Input() tableData :ITableData | any  ;
language :boolean =true;


ChangeLanguage(){
  this.tableData.language = !this.tableData.language;
  this.language =this.tableData.language
}
}
