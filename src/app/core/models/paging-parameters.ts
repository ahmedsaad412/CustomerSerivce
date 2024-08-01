import { Filter } from "./filter";

export interface PagingParameters {
  pageNumber: number;
  pageSize: number;
  sortProperty: string;
  sortDirection: string;
  filters? :string;
}
