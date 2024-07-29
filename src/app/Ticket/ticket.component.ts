import { Component } from '@angular/core';
import { ITableData } from '../core/models/i-table-data';
import { Ticket } from '../core/models/ticket';
import { GridViewComponent } from '../Components/grid-view.component';

import TableOptions from '../core/TableOptions';
import { first } from 'rxjs';
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [GridViewComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  constructor() {}
  url: string = 'https://localhost:7122/api/Customers/GetCustomerPage';
  mode: string = 'Server';
  data: Ticket[] = [
    {
      id: 1,
      firstName: 'Not Avaliable',
      lastName: 'John Doe',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      mode: false,
    },
    {
      id: 2,
      firstName: ' Avaliable',
      lastName: 'tamer ',
      email: 'mona',
      phoneNumber: 'hi',
      isDeleted: false,
      mode: true,
    },
    {
      id: 3,
      firstName: 'avaliable',
      lastName: 'will deep',
      email: 'sara',
      phoneNumber: 'hello',
      isDeleted: false,

      mode: true,
    },
    {
      id: 4,
      firstName: 'Not Avaliable',
      lastName: 'Jane deep',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      mode: true,
    },
    {
      id: 5,
      firstName: 'avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,

      mode: true,
    },
    {
      id: 6,
      firstName: 'Not Avaliable',
      lastName: 'tamer ',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      mode: true,
    },
    {
      id: 7,
      firstName: 'Not Avaliable',
      lastName: 'Jane deep',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      mode: true,
    },
    {
      id: 8,
      firstName: 'Not Avaliable',
      lastName: 'Jane deep',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      mode: true,
    },
    {
      id: 9,
      firstName: 'avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,

      mode: true,
    },
    {
      id: 10,
      firstName: 'avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,

      mode: true,
    },
    {
      id: 11,
      firstName: 'Not Avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,

      mode: true,
    },
  ];
  options: ITableData = TableOptions;
}
