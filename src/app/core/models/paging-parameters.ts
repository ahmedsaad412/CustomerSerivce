import { Filters } from "./filters";

export interface PagingParameters {
  pageNumber: number;
  pageSize: number;
  sortProperty: string;
  sortDirection: string;
  filters? :Filters

}
