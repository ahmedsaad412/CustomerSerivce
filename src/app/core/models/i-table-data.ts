import { ITableAction } from "./i-table-action";
import { ITableHeader } from "./i-table-header";
import { ITablePagination } from "./i-table-pagination";
import { ITableSort } from "./i-table-sort";
import { Ticket } from "./ticket";

export interface ITableData {
headers: ITableHeader[];

pagination: ITablePagination;
sort: ITableSort;
actions: ITableAction[];
Translation:{
  folderName:string
}
}
