import { ITableAction } from './../../core/models/i-table-action';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableData } from '../../core/models/i-table-data';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../core/models/ticket';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../Shared/shared.module';
import { SelectionService } from '../../core/services/selection.service';
@Component({
  selector: '[mytablebody]',
  standalone: true,
  imports: [SharedModule,FormsModule ],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css'
})
export class TableBodyComponent {
  constructor(private selectionService: SelectionService){}
  @Input () options : ITableData |any ;

  editingRowId :number =-1
  editingRowIndex :number =-1
  deletingRowId :number =-1
  shallowCopy :any []=[]
 @Input () Tickets :Ticket[] |any;
 @Output() saveData: EventEmitter<any> = new EventEmitter<any>();
 @Output() deleteData: EventEmitter<any> = new EventEmitter<number>();
 ticket :Ticket |any

 
 selectedItems: Set<any> = new Set();
 isSelected(item: any): boolean {
  return this.selectionService.getSelectedItems().has(item);
}

onCheckboxChange(event: Event, item: any): void {
  const input = event.target as HTMLInputElement;
  if (input.checked) {
    this.selectionService.selectItem(item);
  } else {
    this.selectionService.deselectItem(item);
  }
}

 buttonClicked(action :string ,item : Ticket ,index :number){
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
    this.ticket= this.Tickets.find((ticket: Ticket) => ticket.id === id);
  }
  ///handle save and delete
  saveRow(editedItem :Ticket ){
    this.saveData.emit(editedItem);
    this.editingRowIndex = -1;
  }
  //handle cancling
  cancelEdit(index : any){
    this.Tickets[index] = { ...this.shallowCopy[index] };
    this.editingRowIndex = -1;
  }

  deleteRow(row :Ticket){
    this.deleteData.emit(row.id);
  }
  ToggleMode(item :Ticket){
    this.ticket= this.Tickets.find((ticket: Ticket) => ticket.id ===item.id);
    this.ticket.mode =!item.mode;
  }

}
