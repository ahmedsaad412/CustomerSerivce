import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagingParameters } from '../../models/paging-parameters';
import { Observable } from 'rxjs';
import { PageDto } from '../../models/page-dto';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getPage(url: string, pagingOptions: PagingParameters): Observable<PageDto> {
    return this.http.post<any>(url, pagingOptions);
  }
}
