import { Injectable } from '@angular/core';
import { Scheme } from '../createscheme/scheme';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchemelistService {
  private URL = 'http://localhost:8091/scheme/getCentralSchemeDetails';  // URL to web api
  private URLSchemeDetails = 'http://localhost:8091/scheme/getCentralSchemeDetails/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
    selectedSchemeAddress: string;

    getSchemes(): Observable<Scheme[]> {
      console.log("Inside getSchemes of SchemelistService ****");
      return this.http.get<Scheme[]>(this.URL);
    }

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead



          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }


     getSchemeDetails(address):Observable<Scheme> {
           console.log("Inside getSchemes details for the address "+address);
           return this.http.get<Scheme>(this.URLSchemeDetails+address);
         }
}
