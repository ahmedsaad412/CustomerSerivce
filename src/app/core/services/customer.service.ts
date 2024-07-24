import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINT } from '../models/end-point';
import { GridDto } from '../DTO/Grid';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<GridDto> {
    return this.http.get<GridDto>(
      `${ENDPOINT.MAIN_HOST}${ENDPOINT.Customer.GET_ALL_Customers}?skip=1&take=2&orderBy=firstname%20asc`
    );
  }
}
