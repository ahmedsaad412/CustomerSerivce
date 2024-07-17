import { Component, EventEmitter, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { ITableData } from '../../core/models/i-table-data';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
  @Input() data: ITableData |any;
  @Output() sendData: EventEmitter<any> = new EventEmitter<number>();
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages:number =0;

  ngOnInit(): void {
    this.currentPage=1;
      this.pageSize=this.data.pagination.pageSize;
      this.totalPages = Math.ceil(this.data.data.length / this.pageSize);
      this.currentPage = 1;
  }


nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.sendData.emit(this.currentPage)
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.sendData.emit(this.currentPage)
  }
}
}
