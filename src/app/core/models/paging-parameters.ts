export interface PagingParameters {
  pageNumber: number;
  pageSize: number;
  sortProperty: string;
  sortDirection: string;
  searchProperty?: string;
  searchText?: string;
}
