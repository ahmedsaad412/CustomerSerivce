import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridViewComponent } from './Components/grid-view/grid-view.component';
import { ITableData } from './core/models/i-table-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,GridViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  options: ITableData = {
    headers: [
      { text: 'ID', textAr: 'رقم الهوية', sortable: true ,sortDirection: 'asc'  } ,
      { text: 'Provider', textAr: 'مقدم البلاغ', sortable: true, sortByDefault: true ,sortDirection: 'asc'},
      { text: 'For', textAr: 'لدى', sortable: true ,sortDirection: 'asc'},
      { text: 'Title', textAr: 'العنوان', sortable: true ,sortDirection: 'asc'},
      { text: 'Management', textAr: 'الإدارة', sortable: true ,sortDirection: 'asc'},
      { text: 'ComplainNumber', textAr: 'رقم البلاغ', sortable: true ,sortDirection: 'asc'},
      { text: 'Actions', textAr: ' التحكم', sortable: false,sortDirection: 'asc'},
    ],
    data: [
      { id: 1, provider: 'John Doe', for :'mona',title:'hello' ,management :'no1', complainnumber:2262},
      { id: 2, provider: 'Jane deep', for :'mona',title:'hello' ,management :'no2', complainnumber:15515},
      { id: 3, provider: 'will deep', for :'sara',title:'hello' ,management :'no2', complainnumber:8555},
      { id: 4, provider: 'will Smith', for :'sara',title:'hi' ,management :'no1', complainnumber:8898},
      { id: 5, provider: 'tamer ', for :'mona',title:'hi' ,management :'no1', complainnumber:78},
      { id: 6, provider: 'tamer ', for :'mona',title:'hello' ,management :'no1', complainnumber:999696},
    ],
    pagination: { pageSize: 5, currentPage: 1 },
    sort: { sortBy: 'name', sortDirection: 'asc' },
    actions: [
      { type: 'edit', label: 'Edit' },
      { type: 'delete', label: 'Delete' }
    ],
    language :true
  };
}
