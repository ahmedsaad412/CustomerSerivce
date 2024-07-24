import { CustomerDto } from './DTO/Customers';
import {ITableData} from './models/i-table-data'
import { Ticket } from './models/ticket';
const TableOptions:ITableData = {
  headers: [
    { text: 'ID', sortable: true  ,sortDirection: 'asc'  , sortByDefault: true} ,
    { text: 'FirstName', sortable: true ,sortDirection: 'desc'},
    { text: 'LastName',  sortable: true ,sortDirection: 'desc'},
    { text: 'Email',  sortable: true ,sortDirection: 'desc'},
    { text: 'PhoneNumber',  sortable: true ,sortDirection: 'desc'},
    { text: 'Actions',  sortable: false,sortDirection: 'desc'},
  ],
  pagination: { pageSize: 2, currentPage: 1 },
  sort: { sortBy: '', sortDirection: '' },
  actions: [
    //can edit when avaliable => return true
    { type: 'edit', label: 'Edit' ,  Rule: (obj: CustomerDto) => {
      return obj['isDeleted'] != false;
    }},
    //cant delete tickets at department no1 => return true
    { type: 'delete', label: 'Delete',  Rule: (obj: CustomerDto) => {
      return obj['isDeleted'] == true;
    }}
  ],
  Translation:{
    folderName:'customer/'
  }
  }
export default TableOptions

