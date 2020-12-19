import { Injectable } from '@angular/core';
import { Disbursement } from '../disbursement';
import { Mlresponse } from '../mlresponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisbursementService {
  private URL="http://localhost:8091/scheme/disburseAmountToIndividual";
  private URLCustomerVerification="http://localhost:8091/scheme/CheckCustomer";

  disbursement: Disbursement ;
  mlresponse:Mlresponse;

    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

  constructor(private http: HttpClient) { }




  disburseAmount(disbursement) : Observable<Disbursement> {
        console.log("Identification Number= "+disbursement.disbursementAmount);

        return this.http.post<Disbursement>(this.URL, disbursement, this.httpOptions).pipe(

          catchError(this.handleError<Disbursement>('allocate fund'))

        );
  }


  verifyBeneficiay(mlresponse) : Observable<Mlresponse> {


        return this.http.post<Mlresponse>(this.URLCustomerVerification, mlresponse, this.httpOptions).pipe(

          catchError(this.handleError<Mlresponse>('allocate fund'))

        );
  }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }




}
