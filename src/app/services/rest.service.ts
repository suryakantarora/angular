import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'https://restcountries.com/v3.1/';
  constructor(
    private httpClient: HttpClient
  ) { }

  sendGetRequest(suburl: string): Observable<{}> {
    const finalUrl = this.baseUrl + suburl;
    console.log('Url : ' + finalUrl);
    return this.httpClient.get(finalUrl);
  }
  sendPostRequest(suburl: string, postData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('userName', 'test');
    const finalUrl = this.baseUrl + suburl;
    console.log('Url : ' + finalUrl);
    return this.httpClient.post(finalUrl, postData);
  }
  private extractData(res: Response) {
    console.log('Result : ' + JSON.stringify(res));
    const body = res;
    return body || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('Handle Error : ' + JSON.stringify(errMsg as any));
    return throwError(errMsg);
  }
}
