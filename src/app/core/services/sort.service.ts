import { Injectable } from '@angular/core';
import { ITableHeader } from '../models/i-table-header';
import { ITableData } from '../models/i-table-data';

@Injectable({
  providedIn: 'root'
})
export class SortService {
tableData :ITableData |any
  constructor() { }
  sortColumn(header: ITableHeader ,data :any) {
    this.tableData=data;
    header.sortDirection = header.sortDirection === 'asc' ? 'desc' : 'asc';
    this.tableData.sort = {
      sortBy: header.text.toLowerCase(),
      sortDirection: header.sortDirection
    };

    this.sortData();
  }

  private sortData() {
    const sortBy = this.tableData.sort.sortBy;
    const sortDirection = this.tableData.sort.sortDirection === 'asc' ? 1 : -1;

    this.tableData.data.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (a[sortBy] < b[sortBy]) return -sortDirection;
      if (a[sortBy] > b[sortBy]) return sortDirection;
      return 0;
    });
  }
}
