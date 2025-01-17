import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Scheme } from '../scheme';

@Injectable({
  providedIn: 'root'
})
export class CreateschemeService {
    private URL="http://localhost:8091/scheme/createCentralScheme";
    scheme: Scheme;
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  save(scheme): Observable<Scheme> {

    return this.http.post<Scheme>(this.URL, scheme, this.httpOptions).pipe(
      catchError(this.handleError<Scheme>('Create scheme'))
    );
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
