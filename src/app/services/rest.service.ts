import { Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'https://restcountries.com/v3.1/';
  constructor(
    private httpClient: HttpClient
  ) { }

  sendGetRequest(suburl: string): Observable<any> {
    const finalUrl = this.baseUrl + suburl;
    console.log('Url : ' + finalUrl);
    // return this.httpClient.get(finalUrl);
    return this.httpClient.get(finalUrl).pipe(
      map(() => {
        this.extractData
      }),
      catchError(this.handleError)
    );

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


  postRequest(suburl: string, postData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('userName', 'test');
    const finalUrl = this.baseUrl + suburl;
    console.log('Url : ' + finalUrl);
    return this.httpClient.post(finalUrl, JSON.stringify(postData)).pipe(
      map(() => {
        this.extractData;
      }),
      catchError(this.handleError)
    );
  }



  successAlert(title: string, body: string) {
    Swal.fire({
      title: title,
      text: body,
      icon: 'success',
      backdrop: false,
      showCloseButton: true,
      confirmButtonText: 'Dismiss'
    });
  }
  showAlert(title: string, body: string) {
    Swal.fire({
      title: title,
      text: body,
      icon: 'info',
      backdrop: false,
      showCloseButton: true,
      confirmButtonText: 'Dismiss'
    });
  }
  errorAlert(title: string, body: string) {
    Swal.fire({
      title: title,
      text: body,
      icon: 'error',
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonText: 'Dismiss'
    }).then(() => {
      Swal.close();
    });
  }
  showToast(body: string) {
    Swal.fire({
      text: body,
      toast: true,
      position: 'top-right',
      background: '#eee',
      allowEscapeKey: true,
      timer: 3000, // timeOut for auto-close
    });
  }
  showErrorToast(data: string) {
    Swal.fire({
      text: data + '    ',
      toast: true,
      position: 'top-right',
      background: '#F2DEDE',
      allowEscapeKey: true,
      timer: 3000, // timeOut for auto-close
    });
  }
}
