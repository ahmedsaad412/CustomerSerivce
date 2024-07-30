import { Ticket } from './ticket';

export interface PageDto {
  items: Ticket[];
  totalItemCount: number;
}
