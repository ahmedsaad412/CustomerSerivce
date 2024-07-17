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
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages:number =0;

  ngOnInit(): void {
    this.currentPage=1;
      this.pageSize=this.data.pagination.pageSize;
      this.totalPages = Math.ceil(this.data.data.length / this.pageSize);
      this.currentPage = 1;
      this.paginatedData();
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   debugger;
  //   if (changes['data'] && changes['data'].currentValue) {

  //     this.currentPage=1;
  //     this.pageSize=this.data.pagination.pageSize;
  //     this.totalPages = Math.ceil(this.data.data.length / this.pageSize);
  //     this.currentPage = 1;
  //     this.paginatedData();
  //   }
  // }
//////pagination //retrive subset from data []
 paginatedData() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const paginated = this.data.data.slice(startIndex, startIndex + this.pageSize);
  this.sendData.emit(paginated)
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.paginatedData();
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.paginatedData();
  }
}
}
