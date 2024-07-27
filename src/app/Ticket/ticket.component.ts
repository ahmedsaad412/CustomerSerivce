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
      firstname: 'Not Avaliable',
      lastname: 'John Doe',
      email: 'mona',
      phonenumber: 'hello',
      isdeleted: false,
      mode: false,
    },
    {
      id: 2,
      firstname: ' Avaliable',
      lastname: 'tamer ',
      email: 'mona',
      phonenumber: 'hi',
      isdeleted: false,
      mode: true,
    },
    {
      id: 3,
      firstname: 'avaliable',
      lastname: 'will deep',
      email: 'sara',
      phonenumber: 'hello',
      isdeleted: false,

      mode: true,
    },
    {
      id: 4,
      firstname: 'Not Avaliable',
      lastname: 'Jane deep',
      email: 'mona',
      phonenumber: 'hello',
      isdeleted: false,
      mode: true,
    },
    {
      id: 5,
      firstname: 'avaliable',
      lastname: 'will Smith',
      email: 'sara',
      phonenumber: 'hi',
      isdeleted: false,

      mode: true,
    },
    {
      id: 6,
      firstname: 'Not Avaliable',
      lastname: 'tamer ',
      email: 'mona',
      phonenumber: 'hello',
      isdeleted: false,
      mode: true,
    },
    {
      id: 7,
      firstname: 'Not Avaliable',
      lastname: 'Jane deep',
      email: 'mona',
      phonenumber: 'hello',
      isdeleted: false,
      mode: true,
    },
    {
      id: 8,
      firstname: 'Not Avaliable',
      lastname: 'Jane deep',
      email: 'mona',
      phonenumber: 'hello',
      isdeleted: false,
      mode: true,
    },
    {
      id: 9,
      firstname: 'avaliable',
      lastname: 'will Smith',
      email: 'sara',
      phonenumber: 'hi',
      isdeleted: false,

      mode: true,
    },
    {
      id: 10,
      firstname: 'avaliable',
      lastname: 'will Smith',
      email: 'sara',
      phonenumber: 'hi',
      isdeleted: false,

      mode: true,
    },
    {
      id: 11,
      firstname: 'Not Avaliable',
      lastname: 'will Smith',
      email: 'sara',
      phonenumber: 'hi',
      isdeleted: false,

      mode: true,
    },
  ];
  options: ITableData = TableOptions;
}
