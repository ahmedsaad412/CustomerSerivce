import { ITableAction } from './../../core/models/i-table-action';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITableData } from '../../core/models/i-table-data';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../core/models/ticket';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css'
})
export class TableBodyComponent {
  @Input () tableData : ITableData |any ;
  editingRowIndex :number =-1
  deletingRowIndex :number =-1
 @Input () paginatedData :Ticket[] |any;
  fireEvent(action :any ,id : any){
    switch(action){
      case 'edit' : this.editingRowIndex =id
        break;
      case 'delete' : this.deletingRowIndex =id
        break;
    }
    console.log('action type:' +action);
    console.log( 'ticket id: '+id );

  }
  saveRow(index :number ,item :ITableData){
console.log(index);
console.log(item);

  }
  cancelEdit(index : any){
    console.log(index);

  }

}
