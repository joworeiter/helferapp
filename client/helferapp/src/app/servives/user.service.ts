import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'http://app.s1710456027.student.kwmhgb.at/api';


  constructor(private http: HttpClient) {
  }

  getUser(id) {
    return this.http.get(`${this.api}/getUser/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any>{
    return throwError(error);
  }

}
