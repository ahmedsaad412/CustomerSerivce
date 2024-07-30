import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { ITableData } from '../../core/models/i-table-data';
import { Ticket } from '../../core/models/ticket';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allRecords'] || changes['serverPageSize']) {
      this.updateTotalPages();
    }
  }

  @Input() options: ITableData |any;
  @Input() data!:Ticket[];
  @Input() serverPageSize !:number
  @Input() allRecords !:number
  @Input() mode :string =''

  @Output() sendData: EventEmitter<any> = new EventEmitter<number>();
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages:number =0;


  updateTotalPages(): void {
    if(this.mode ="Server"){
      if (this.serverPageSize > 0) {
        this.totalPages = Math.ceil(this.allRecords / this.serverPageSize);
      } else {
        this.totalPages = 0;
      }
    }else{
      this.currentPage=1;
      this.pageSize=this.options.pagination.pageSize;
      this.totalPages = Math.ceil(this.data.length / this.pageSize);
      this.currentPage = 1;
    }
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
