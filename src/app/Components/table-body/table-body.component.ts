import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITableData } from '../../core/models/i-table-data';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css'
})
export class TableBodyComponent {
  @Input () tableData : ITableData |any ;


}
