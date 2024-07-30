import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagingParameters } from '../../models/paging-parameters';
import { catchError, Observable, throwError } from 'rxjs';
import { PageDto } from '../../models/page-dto';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  FetchPage(url: string, pagingOptions: PagingParameters): Observable<PageDto> {
    return this.http.post<PageDto>(url, pagingOptions).pipe(
      catchError(error => {
        console.error('Error fetching page:', error);
        return throwError(() => new Error('Error fetching page'));
      })
    );
  }
}
