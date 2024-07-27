import { ITableData } from './models/i-table-data';
import { Ticket } from './models/ticket';
const TableOptions: ITableData = {
  headers: [
    { text: 'ID', sortable: true, sortDirection: 'asc', sortByDefault: true },
    { text: 'FirstName', sortable: true, sortDirection: 'desc' },
    { text: 'LastName', sortable: true, sortDirection: 'desc' },
    { text: 'Email', sortable: true, sortDirection: 'desc' },

    { text: 'PhoneNumber', sortable: true, sortDirection: 'desc' },

    { text: 'Actions', sortable: false, sortDirection: 'desc' },
  ],
  pagination: { pageSize: 3, currentPage: 1 },
  sort: { sortBy: '', sortDirection: '' },
  actions: [
    {
      type: 'edit',
      label: 'Edit',
      Rule: (obj: Ticket) => {
        return (obj['isdeleted'] = false);
      },
    },

    {
      type: 'delete',
      label: 'Delete',
      Rule: (obj: Ticket) => {
        return (obj['isdeleted'] = true);
      },
    },
  ],
  Translation: {
    folderName: 'ticket/',
  },
};
export default TableOptions;
