import { Component } from '@angular/core';
import { ITableData } from '../core/models/i-table-data';
import { Ticket } from '../core/models/ticket';
import { GridViewComponent } from '../Components/grid-view.component';
import { FolderNameService } from '../core/services/folder-name.service';
import TableOptions from '../core/TableOptions'
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [GridViewComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  constructor(private folderNameService :FolderNameService ){}
  data:any = [
    { id: 1,status :'Not Avaliable', provider: 'John Doe', for :'mona',title:'hello' ,management :'no2', complainnumber:2262,mode :false},
    { id: 2,status :' Avaliable', provider: 'tamer ', for :'mona',title:'hi' ,management :'no1', complainnumber:78,mode :true},
    { id: 3,status :'avaliable', provider: 'will deep', for :'sara',title:'hello' ,management :'no2', complainnumber:8555,mode :true},
    { id: 4,status :'Not Avaliable', provider: 'Jane deep', for :'mona',title:'hello' ,management :'no2', complainnumber:15515,mode :true},
    { id: 5,status :'avaliable', provider: 'will Smith', for :'sara',title:'hi' ,management :'no1', complainnumber:8898,mode :true},
    { id: 6,status :'Not Avaliable', provider: 'tamer ', for :'mona',title:'hello' ,management :'no1', complainnumber:999696,mode :true},
    { id: 7,status :'Not Avaliable', provider: 'Jane deep', for :'mona',title:'hello' ,management :'no2', complainnumber:15515,mode :true},
    { id: 8,status :'Not Avaliable', provider: 'Jane deep', for :'mona',title:'hello' ,management :'no2', complainnumber:15515,mode :true},
    { id: 9,status :'avaliable', provider: 'will Smith', for :'sara',title:'hi' ,management :'no1', complainnumber:8898,mode :true},
    { id: 10,status :'avaliable', provider: 'will Smith', for :'sara',title:'hi' ,management :'no2', complainnumber:8898,mode :true},
    { id: 11,status :'Not Avaliable', provider: 'will Smith', for :'sara',title:'hi' ,management :'no1', complainnumber:8898,mode :true},
  ] ;
  options: ITableData = TableOptions
}
