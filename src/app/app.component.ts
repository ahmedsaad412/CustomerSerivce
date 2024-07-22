import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ITableData } from './core/models/i-table-data';
import { Ticket } from './core/models/ticket';
import { SortIconDirective } from './Directives/sort-icon.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { TicketComponent } from './Ticket/ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,SortIconDirective ,TranslateModule ,TicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

}
