import { Injectable } from '@angular/core';
import { Scheme } from '../../createscheme/scheme';
import { Disbursement } from '../../funddisbursement/disbursement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class ReportsService {

    private URLSchemelist = 'http://localhost:8091/scheme/getCentralSchemeDetails';  // URL to web api
    private URLDisbursementlist = 'http://localhost:8091/scheme/getDisbursementDetailsByStateContract/';  // URL to web api
    private URLVerifyCharityHouse='http://localhost:8091/scheme/verifyStateContract/';
    private URLBeneficiary = 'http://localhost:8091/scheme/verifyIndividualContract/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

    getSchemes(): Observable<Scheme[]> {
      console.log("Inside getSchemes of SchemelistService ****");
      return this.http.get<Scheme[]>(this.URLSchemelist);
    }

     getDisbursementList(address): Observable<Disbursement[]> {
          console.log("Inside getSchemes of SchemelistService ****");
          return this.http.get<Disbursement[]>(this.URLDisbursementlist+address);
        }

      verifyCharityHouse(address): Observable<Disbursement>{
          return this.http.get<Disbursement>(this.URLVerifyCharityHouse+address);
      }

      verifyBeneficiary(address): Observable<Disbursement>{
          return this.http.get<Disbursement>(this.URLBeneficiary+address);
      }

}
