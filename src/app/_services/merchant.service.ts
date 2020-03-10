import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Merchant } from '../_models/merchant';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private merchantsUrl = 'api/merchants';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMerchants(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(this.merchantsUrl)
      .pipe(
        catchError(this.handleError<Merchant[]>('getMerchants', []))
      );
  }

  getMerchant(id: number): Observable<Merchant> {
    const url = `${this.merchantsUrl}/${id}`;
    return this.http.get<Merchant>(url).pipe(
      catchError(this.handleError<Merchant>(`getMerchant id=${id}`))
    );
  }

  updateMerchant(merchant: Merchant): Observable<any> {
    return this.http.put(this.merchantsUrl, merchant, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMerchant'))
    )
  }

  deleteMerchant (merchant: Merchant | number): Observable<Merchant> {
    const id = typeof merchant === 'number' ? merchant : merchant.id;
    const url = `${this.merchantsUrl}/${id}`;
  
    return this.http.delete<Merchant>(url, this.httpOptions).pipe(
      catchError(this.handleError<Merchant>('deleteMerchant'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addMerchant(merchant: Merchant): Observable<Merchant> {
    return this.http.post<Merchant>(this.merchantsUrl, merchant, this.httpOptions).pipe(
      catchError(this.handleError<Merchant>('addMerchant'))
    );
  }
}
