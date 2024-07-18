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
 @Input () Tickets :Ticket[] |any;
 buttonClicked(action :string ,id : number){
    switch(action){
      case 'edit' : this.editingRowIndex =id
        break;
      case 'delete' : this.deletingRowIndex =id
        break;
    }
  }
  // saveRow(index :number ,item :ITableData){
  // }
  // cancelEdit(index : any){

  // }

}
