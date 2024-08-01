import { ChangeDetectorRef, Component, OnInit, ViewChild ,Input} from '@angular/core';
import { ITableData } from '../core/models/i-table-data';
import { Ticket } from '../core/models/ticket';
import { GridViewComponent } from '../Components/grid-view.component';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import TableOptions from '../core/TableOptions';
import { SharedModule } from '../Shared/shared.module';
import { TranslationService } from '../core/services/translation.service';


@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [GridViewComponent,ReactiveFormsModule,ReactiveFormsModule,SharedModule,FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent implements OnInit {
  @ViewChild(GridViewComponent) gridView!: GridViewComponent;
  pagingParameters: any;
  search :string =''
  currentLanguage: string = 'ar';

  constructor(private fb :FormBuilder,private translationService: TranslationService, private c: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.translationService.SetDefaultLanguage(this.currentLanguage);
      this.searchForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        phoneNumber: [''],
        dateFrom: [''],
        dateTo: ['']
      });
    this.c.detectChanges();
  }
  url: string = 'https://localhost:7122/api/Customers/GetCustomerPageNew';
  mode: string = 'Server';
  data: Ticket[] = [
    {
      id: 1,
      firstName: 'Not Avaliable',
      lastName: 'John Doe',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      commercialId:1253181,
      mode: false,  birthDate:new Date(),
    },
    {
      id: 2,
      firstName: ' Avaliable',
      lastName: 'tamer ',
      email: 'mona',
      phoneNumber: 'hi',
      isDeleted: false,
      commercialId:125481,
      mode: true, birthDate:new Date(),
    },
    {
      id: 3,
      firstName: 'avaliable',
      lastName: 'will deep',
      email: 'sara',
      phoneNumber: 'hello',
      isDeleted: false,
      commercialId:1226181,
      birthDate:new Date(),
      mode: true,
    },
    {
      id: 4,
      firstName: 'Not Avaliable',
      lastName: 'Jane deep',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      commercialId:1255181,
      mode: true, birthDate:new Date(),
    },
    {
      id: 5,
      firstName: 'avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,
      commercialId:1258181,
      birthDate:new Date(),
      mode: true,
    },
    {
      id: 6,
      firstName: 'Not Avaliable',
      lastName: 'tamer ',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      commercialId:1259181,
      mode: true, birthDate:new Date(),
    },
    {
      id: 7,
      firstName: 'Not Avaliable',
      lastName: 'Jane deep',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      commercialId:1275181,
      mode: true, birthDate:new Date(),
    },
    {
      id: 8,
      firstName: 'Not Avaliable',
      lastName: 'Jane deep',
      email: 'mona',
      phoneNumber: 'hello',
      isDeleted: false,
      commercialId:1355181,
      mode: true, birthDate:new Date(),
    },
    {
      id: 9,
      firstName: 'avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,
      commercialId:2255181,
      birthDate:new Date(),
      mode: true,
    },
    {
      id: 10,
      firstName: 'avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,
      commercialId:3255181,
      birthDate:new Date(),
      mode: true,
    },
    {
      id: 11,
      firstName: 'Not Avaliable',
      lastName: 'will Smith',
      email: 'sara',
      phoneNumber: 'hi',
      isDeleted: false,
      commercialId:1255181,
      birthDate:new Date(),
      mode: true,
    },
  ];
  options: ITableData = TableOptions;
  searchForm!: FormGroup;
  onSearch() {
    const formValues = this.searchForm.value;
    const jsonString = JSON.stringify(formValues);
    this.gridView.updateFilters(jsonString);
  }
}
