import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Fund } from '../fund';

@Injectable({
  providedIn: 'root'
})
export class AllocatefundService {
  private URL="http://localhost:8091/scheme/disburseAmountToState";
  private getStateListURL="http://localhost:8091/scheme/getStateSchemeDetailsByCentralContract/";
  private getStateDetailsURL="http://localhost:8091/scheme//getStateSchemeDetails/"
  private getStateMasterListURL="http://localhost:8091/scheme/getCharityHouseList";
  fund: Fund;
  centralAddress: string;
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

  save(fund): Observable<Fund> {

    return this.http.post<Fund>(this.URL, fund, this.httpOptions).pipe(
      catchError(this.handleError<Fund>('allocate fund'))
    );
  }

    getStateList(address): Observable<Fund[]> {
      console.log("Inside getSchemes of getStateListURL **** = "+this.getStateListURL);
      return this.http.get<Fund[]>(this.getStateListURL+address);
    }


  getStateContractDetails(address): Observable<Fund> {
        console.log("Inside getSchemes of getStatedetailsURL **** = "+this.getStateDetailsURL);
        return this.http.get<Fund>(this.getStateDetailsURL+address);
      }

  getStateMasterList(): Observable<Fund[]> {
        console.log("Inside getSchemes of getStatedetailsURL **** = "+this.getStateDetailsURL);
        return this.http.get<Fund[]>(this.getStateMasterListURL);
      }
/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  constructor(private http: HttpClient) { }

}
