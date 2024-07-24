import { ITableAction } from './../../core/models/i-table-action';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableData } from '../../core/models/i-table-data';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../Shared/shared.module';
import { CustomerDto } from '../../core/DTO/Customers';
@Component({
  selector: '[mytablebody]',
  standalone: true,
  imports: [SharedModule,FormsModule ],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css'
})
export class TableBodyComponent {
  constructor(){}
  @Input () options : ITableData |any ;

  editingRowId :number =-1
  editingRowIndex :number =-1
  deletingRowId :number =-1
  shallowCopy :any []=[]
 @Input () Tickets :CustomerDto[] |any;
 @Output() saveData: EventEmitter<any> = new EventEmitter<any>();
 @Output() deleteData: EventEmitter<any> = new EventEmitter<number>();

 ticket :CustomerDto |any

 buttonClicked(action :string ,item : CustomerDto ,index :number){
    switch(action){
      case 'edit' :
      this.editingRowId =item.id
      this.editingRowIndex=index
      this.shallowCopy[index] = { ...this.Tickets[index]};
      this.getTicket(this.editingRowId)
        break;
      case 'delete' : this.deletingRowId =item.id
        this.getTicket(this.deletingRowId)
        this.deleteRow(this.ticket)
        break;
    }
  }
  getTicket(id :number){
    this.ticket= this.Tickets.find((ticket: CustomerDto) => ticket.id === id);
  }
  ///handle save and delete
  saveRow(editedItem :CustomerDto ){
    this.saveData.emit(editedItem);
    this.editingRowIndex = -1;
  }
  //handle cancling
  cancelEdit(index : any){
    this.Tickets[index] = { ...this.shallowCopy[index] };
    this.editingRowIndex = -1;
  }

  deleteRow(row :CustomerDto){
    this.deleteData.emit(row.id);
  }
  // ToggleMode(item :CustomerDto){
  //   this.ticket= this.Tickets.find((ticket: CustomerDto) => ticket.id ===item.id);
  //   console.log('before test '+ this.ticket.mode);
  //   this.ticket.mode =!item.mode;
  //   console.log('after test '+ this.ticket.mode);


  // }
}
