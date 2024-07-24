import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { ITableData } from '../models/i-table-data';
import { CustomerDto } from '../DTO/Customers';
import { GridDto } from '../DTO/Grid';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
pageNum : number =1
  paginateDate(page_number :number ,options :ITableData ,data :GridDto){
    const startIndex = (page_number - 1) * options.pagination.pageSize;
    this.pageNum = page_number
    return data.data.slice(startIndex, startIndex + options.pagination.pageSize);
  }
}
