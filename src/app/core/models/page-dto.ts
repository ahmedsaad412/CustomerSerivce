import { Ticket } from './ticket';

export interface PageDto {
  items: Ticket[];
  totalTiems: number;
}
