import { Component, OnInit } from '@angular/core';
import { Disbursement } from './disbursement';
import { Mlresponse } from './mlresponse';
import { ActivatedRoute, Router } from '@angular/router';
import { Fund } from '../allocatefund/fund';
import { Scheme } from '../createscheme/scheme';
import { AllocatefundService } from '../allocatefund/services/allocatefund.service';
import { SchemelistService } from '../schemelist/schemelist.service';
import { DisbursementService } from './services/disbursement.service';
import {OverlayModule} from '@angular/cdk/overlay'
import {MatDialog,MatDialogConfig} from "@angular/material/dialog"
import {MloverlayComponent} from "../mloverlay/mloverlay.component";


@Component({
  selector: 'app-funddisbursement',
  templateUrl: './funddisbursement.component.html',
  styleUrls: ['./funddisbursement.component.css']
})
export class FunddisbursementComponent implements OnInit {
disbursement: Disbursement = new Disbursement();
stateBalanceAmount: number;
stateContractAddress: string;
fName:   string;
lName: string;
private funds: Fund[]=[];
private stateFund: Fund= new Fund();
scheme: Scheme;
gender = "Male";
employed="Yes";
selectedStateId: string;
mlScore: string;
mlScoreNum: number;
mlScoreStyle:string;
mlresponse: Mlresponse = new Mlresponse();
  constructor(private route: ActivatedRoute,private router: Router,private allocatefundService: AllocatefundService,private schemelistService: SchemelistService,private disbursementService: DisbursementService,private dialog: MatDialog ) {
  console.log("Inside fund disbursement constructor");

  }

   async ngOnInit() {
      console.log("Central address = "+this.allocatefundService.centralAddress);
      console.log("Central address = "+this.allocatefundService.centralAddress);

       await this.getStateList(this.allocatefundService.centralAddress);
      this.getSchemeDetails(this.allocatefundService.centralAddress);
                    console.log(" this.funds length on init method "+this.funds.length);


  }

  save(): void {
      this.disbursement.stateContractAddress=this.stateContractAddress;
      console.log("State contract address  inside save= "+this.disbursement.stateContractAddress);
      console.log("gender = "+this.gender);
      console.log("this.selectedStateId = "+this.selectedStateId);

      this.disbursement.gender=this.gender;
      this.disbursement.isEmployed=this.employed;
      this.disbursement.stateId=this.selectedStateId;
        this.disbursementService.disburseAmount(this.disbursement)
            .subscribe(data =>{
              console.log("F Name = "+this.disbursement.firstName);
              this.fName=this.disbursement.firstName;
              this.lName=this.disbursement.lastName;
              this.disbursement=data;
              this.disbursement.firstName=this.fName;
              this.disbursement.lastName=this.lName;
              this.goToConfirmation();
              this.disbursementService.disbursement = data;
            },error => console.log('exception in save contract error = '+error));

    }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

    goToConfirmation(){
      this.router.navigate(['/disbursementconfirm']);
      console.log("Calling confirmation screen");
    }

   async getStateList(address): Promise<String>{
       return new Promise(resolve => {
                  this.allocatefundService.getStateList(address).subscribe(data => {
                        if(data){
                          this.funds=data;
                          console.log(" this.funds length "+this.funds.length);
                          console.log("SchemeName = "+this.funds[0].schemeName)
                         if (data[0] !== null && data[0] != undefined) {
                                        resolve(data[0].schemeName);
                                    }
                          }else{
                                  console.log("error >>>>>>>>>>>>> ");
                                  resolve(null);
                                }
                        });

                 });
      }

    getSchemeDetails(address){
        console.log("Inside get Schemes in schemelist component ts");

           this.schemelistService.getSchemeDetails(address)
                .subscribe(data => {
                                      if(data){
                                        this.scheme = data;
                                        console.log("Scheme Name inside allocate fund= "+ this.scheme.schemeAmount);

                                       //this.fund.schemeName=this.scheme.schemeName;
                                        //this.fund.schemesanctionedAmount=this.scheme.schemeAmount;
                                        //this.fund.centralAddress=this.scheme.centralContractAddress;
                                      } else{
                                          console.log("error >>>>>>>>>>>>> ");

                                      }
                                    });

    }

    changeSelectCharity(e,stateId){
        console.log("stateId = "+stateId);
        if(stateId){
            this.stateContractAddress=this.funds[stateId].stateContractAddress;
            this.selectedStateId=this.funds[stateId].stateId;
            console.log("stateContractAddress = "+this.stateContractAddress);
            this.allocatefundService.getStateContractDetails(this.stateContractAddress).subscribe(data => {
                                                    this.stateFund=data;
                                                    console.log("schemeBalanceAmount = "+this.stateFund.schemeBalanceAmount);
                                                  });
        }else{
          console.log("State id not defined");
        }
    }

    verifyBeneficiay(){
      console.log("Inside verify beneficiary......");
      console.log("this.disbursement.gender = "+this.disbursement.gender);
      console.log("this.disbursement.isEmployed = "+this.disbursement.isEmployed);
      this.mlresponse.disbursementAmount= this.disbursement.disbursementAmount;
      this.mlresponse.dob = this.disbursement.dob;
      this.mlresponse.income = this.disbursement.income;
      this.mlresponse.gender = this.disbursement.gender;
      this.mlresponse.isEmployed = this.disbursement.isEmployed;
      this.disbursementService.verifyBeneficiay(this.mlresponse).subscribe(data => {
                                                this.mlresponse=data;
                                                this.disbursementService.mlresponse=data;
                                                console.log("pRED0ICTED_STATUS = "+this.mlresponse.PREDICTED_STATUS);
                                                if (this.mlresponse.PREDICTED_STATUS==="NORMAL"){
                                                        this.mlScoreStyle="highML";
                                                }else if(this.mlresponse.PREDICTED_STATUS==="SUSPECT"){
                                                        this.mlScoreStyle="mediumML";
                                                }else if(this.mlresponse.PREDICTED_STATUS==="FRAUD"){
                                                        this.mlScoreStyle="lowML";
                                                }else if(this.mlresponse.PREDICTED_STATUS==="COULD BE FRAUD"){
                                                        this.mlScoreStyle="mediumML2";
                                                }
                                                        const dialogConfig=new MatDialogConfig();
                                                        //dialogConfig.disableClose=true;
                                                        dialogConfig.autoFocus=true;
                                                        dialogConfig.width="40%"
                                                        dialogConfig.height="40%"
                                                        this.dialog.open(MloverlayComponent,dialogConfig);

                                              });

    }

}
