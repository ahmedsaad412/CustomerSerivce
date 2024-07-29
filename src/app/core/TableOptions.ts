import { ITableData } from './models/i-table-data';
import { Ticket } from './models/ticket';
const TableOptions: ITableData = {
  headers: [
    { text: 'id', sortable: true, sortDirection: 'asc', sortByDefault: true },
    { text: 'firstName', sortable: true, sortDirection: 'desc' },
    { text: 'lastName', sortable: true, sortDirection: 'desc' },
    { text: 'email', sortable: true, sortDirection: 'desc' },
    { text: 'phoneNumber', sortable: true, sortDirection: 'desc' },
    { text: 'actions', sortable: false, sortDirection: 'desc' },
  ],
  pagination: { pageSize: 3, currentPage: 1 },
  sort: { sortBy: '', sortDirection: '' },
  actions: [
    {
      type: 'edit',
      label: 'Edit',
      Rule: (obj: Ticket) => {
        return (obj['isDeleted'] = false);
      },
    },

    {
      type: 'delete',
      label: 'Delete',
      Rule: (obj: Ticket) => {
        return (obj['isDeleted'] = true);
      },
    },
  ],
  Translation: {
    folderName: 'ticket/',
  },
};
export default TableOptions;
