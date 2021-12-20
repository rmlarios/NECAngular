import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { apiResponse } from '../models/apiResponse';

const apiUrl = 'https://localhost:5001/api/'
@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      //this.errorResp = new errorResponse(error.error.message,error.statusText,error.type.toString());
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    //return of(error.error);
    /*throwError('Something bad happened; please try again later.');*/
  }

  getCurrencys(current:string="",value:number=0): Observable<any> {

    return this.http.get<apiResponse>(apiUrl + 'Currencies/GetList/List')
      .pipe(
     // map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
}
