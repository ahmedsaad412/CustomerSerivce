export interface ITableAction {
  type: string;
  label: string;
  Rule(obj: any): boolean;
}
