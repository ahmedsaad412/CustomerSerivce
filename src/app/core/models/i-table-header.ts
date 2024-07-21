export interface ITableHeader {
    text: string; // Header text (in English)
    sortable: boolean; // Whether the column is sortable
    sortByDefault?: boolean; // If true, this column is sorted by default
    sortDirection: 'asc' | 'desc';
}
