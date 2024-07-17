import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
pageNum : number =1
  paginateDate(page_number :number ,tableData :any){
    const startIndex = (page_number - 1) * tableData.pagination.pageSize;
    this.pageNum = page_number
    return tableData.data.slice(startIndex, startIndex + tableData.pagination.pageSize);
  }
}
