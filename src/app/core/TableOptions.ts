import {ITableData} from './models/i-table-data'
import { Ticket } from './models/ticket';
const TableOptions:ITableData = {
  headers: [
    { text: 'ID', sortable: true  ,sortDirection: 'asc'  , sortByDefault: true} ,
    { text: 'Provider', sortable: true ,sortDirection: 'desc'},
    { text: 'For',  sortable: true ,sortDirection: 'desc'},
    { text: 'Title',  sortable: true ,sortDirection: 'desc'},
    { text: 'Management',  sortable: true ,sortDirection: 'desc'},
    { text: 'ComplainNumber', sortable: true ,sortDirection: 'desc'},
    { text: 'Status',  sortable: true ,sortDirection: 'desc'},
    { text: 'Actions',  sortable: false,sortDirection: 'desc'},
  ],
  pagination: { pageSize: 3, currentPage: 1 },
  sort: { sortBy: '', sortDirection: '' },
  actions: [
    //can edit when avaliable => return true
    { type: 'edit', label: 'Edit' ,  Rule: (obj: Ticket) => {
      return obj['status'] != 'Not Avaliable';
    }},
    //cant delete tickets at department no1 => return true
    { type: 'delete', label: 'Delete',  Rule: (obj: Ticket) => {
      return obj['management'] == 'no1';
    } }
  ],
  Translation:{
    folderName:'ticket/'
  }
  }
export default TableOptions
