import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { ITableData } from '../models/i-table-data';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
pageNum : number =1
  paginateDate(page_number :number ,options :ITableData ,data :Ticket[]){
    const startIndex = (page_number - 1) * options.pagination.pageSize;
    this.pageNum = page_number
    return data.slice(startIndex, startIndex + options.pagination.pageSize);
  }
}
