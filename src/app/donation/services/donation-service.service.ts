import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Donation } from '../donation';
@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {
  private donationURL="http://localhost:8091/scheme/makeDonation";
  donation: Donation;
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


  save(donation): Observable<Donation> {
  donation.centralAddress="0x6b96d4bb3d8048f2f776201b0a19184fbb5e3b15";
    return this.http.post<Donation>(this.donationURL, donation, this.httpOptions).pipe(
      catchError(this.handleError<Donation>('SaveDonation'))
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
