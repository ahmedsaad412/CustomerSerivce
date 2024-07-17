import { Injectable } from '@angular/core';
import { ITableHeader } from '../models/i-table-header';
import { ITableData } from '../models/i-table-data';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {
tableData :ITableData |any
  constructor(private pagination :PaginationService) { }
  sortColumn(header: ITableHeader ,data :ITableData) {
    this.tableData=data;
    header.sortDirection = header.sortDirection === 'asc' ? 'desc' : 'asc';
    this.tableData.sort = {
      sortBy: header.text.toLowerCase(),
      sortDirection: header.sortDirection
    };
    this.sortData();
    return this.pagination.paginateDate(this.pagination.pageNum,this.tableData)
  }

  private sortData() {
    const sortBy = this.tableData.sort.sortBy;
    const sortDirection = this.tableData.sort.sortDirection === 'asc' ? 1 : -1;
    this.tableData.data.sort((object1:any, object2: any) => {
      console.log('object1' + JSON.stringify(object1));
      console.log('object2' + JSON.stringify(object2));
      if (object1[sortBy] < object2[sortBy]) return -sortDirection;
      if (object1[sortBy] > object2[sortBy]) return sortDirection;
      return 0;
    });
  }
}
