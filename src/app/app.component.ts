import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridViewComponent } from './Components/grid-view.component';
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
      { text: 'ID', textAr: 'رقم الهوية', sortable: true , sortByDefault: true ,sortDirection: 'asc'  } ,
      { text: 'Provider', textAr: 'مقدم البلاغ', sortable: true ,sortDirection: 'desc'},
      { text: 'For', textAr: 'لدى', sortable: true ,sortDirection: 'desc'},
      { text: 'Title', textAr: 'العنوان', sortable: true ,sortDirection: 'desc'},
      { text: 'Management', textAr: 'الإدارة', sortable: true ,sortDirection: 'desc'},
      { text: 'ComplainNumber', textAr: 'رقم البلاغ', sortable: true ,sortDirection: 'desc'},
      { text: 'Status', textAr: ' الحالة', sortable: true ,sortDirection: 'desc'},
      { text: 'Actions', textAr: ' التحكم', sortable: false,sortDirection: 'desc'},
    ],
    data: [
      { id: 1,status :'avaliable', provider: 'John Doe', for :'mona',title:'hello' ,management :'no2', complainnumber:2262},
      { id: 2,status :'Not Avaliable', provider: 'tamer ', for :'mona',title:'hi' ,management :'no1', complainnumber:78},
      { id: 3,status :'avaliable', provider: 'will deep', for :'sara',title:'hello' ,management :'no2', complainnumber:8555},
      { id: 4,status :'Not Avaliable', provider: 'Jane deep', for :'mona',title:'hello' ,management :'no2', complainnumber:15515},
      { id: 5,status :'avaliable', provider: 'will Smith', for :'sara',title:'hi' ,management :'no1', complainnumber:8898},
      { id: 6,status :'Not Avaliable', provider: 'tamer ', for :'mona',title:'hello' ,management :'no1', complainnumber:999696},
    ],
    pagination: { pageSize: 3, currentPage: 1 },
    sort: { sortBy: '', sortDirection: '' },
    actions: [
      //can edit when avaliable => return true
      { type: 'edit', label: 'Edit' ,  Rule: (obj: any) => {
        return obj['status'] != 'Not Avaliable';
      }},
      //cant delete tickets at department no1 => return true
      { type: 'delete', label: 'Delete',  Rule: (obj: any) => {
        return obj['management'] == 'no1';
      } }
    ],
    language :true
  };
}
