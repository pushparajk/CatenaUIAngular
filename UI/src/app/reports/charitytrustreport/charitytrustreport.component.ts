import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from '../services/reports.service';
import { SchemelistService } from '../../schemelist/schemelist.service';
import { AllocatefundService } from '../../allocatefund/services/allocatefund.service';
import { Scheme } from '../../createscheme/scheme';
import { Fund } from '../../allocatefund/Fund';
import { Disbursement } from '../../funddisbursement/disbursement';
@Component({
  selector: 'app-charitytrustreport',
  templateUrl: './charitytrustreport.component.html',
  styleUrls: ['./charitytrustreport.component.css']
})
export class CharitytrustreportComponent implements OnInit {
    selectCharity: Fund = {
    schemeName: 'Test',
      schemesanctionedAmount:4500,
      sanctionedAmount: 1000,
      allocateAmount: 'Test',
      charityTrustId: 3,
      centralAddress: 'Test',
      stateId: 'Test',
      returnedAmount: 'Test',
      stateContractAddress: 'Test',
      schemeBalanceAmount:'Test',
      contractStatus:'Test',
      homeName:'Default Home'
    };
   schemes: Scheme[] = [];
    selectedScheme: Scheme = new Scheme();
    stateFund: Fund[]=[];
    selectedCharityAddress: string;
    disbursements: Disbursement[]=[];
    disbursement: Disbursement;
    selectedBeneficiaryAddress: string;
    selectedIndex: number;
   constructor(private route: ActivatedRoute,private router: Router,private schemelistService:SchemelistService,private allocatefundService: AllocatefundService,private reportsService:ReportsService) { }


   async ngOnInit() {
       await this.getSchemes();
        console.log("length of this.schemes in init method= "+this.schemes.length);
   }

   verify(){
        console.log("Selected index inside verify = "+this.selectedIndex);
          console.log("Selected charity address inside verify = "+this.selectedCharityAddress);
          this.reportsService.verifyBeneficiary(this.selectedBeneficiaryAddress).subscribe(data => {
                                                       this.disbursement=data;
                                                       console.log("disbursement status = "+this.disbursement.contractStatus);
                                                       this.disbursements[this.selectedIndex].contractStatus=this.disbursement.contractStatus;
                                                       console.log("Selected index inside verify = "+this.selectedIndex);
                                                     });
     }

   goToDashboard(){
       this.router.navigate(['/dashboard']);
     }

     async getSchemes(): Promise<String>{
      return new Promise(resolve => {
             console.log("Inside get Schemes in schemelist component ts");

              this.schemelistService.getSchemes()
                 .subscribe(data => {
                                       if(data){
                                         this.schemes = data;
                                         console.log("length of data = "+data.length);
                                         console.log("length of this.schemes = "+this.schemes.length);
                                          if (data[0] !== null && data[0] != undefined) {
                                             resolve(data[0].schemeName);
                                         }
                                       } else{
                                           console.log("error >>>>>>>>>>>>> ");
                                           resolve(null);
                                       }
                                     });
                });
         }

           changeSelectScheme(e,schemeIndex){
                 console.log("scheme index = "+schemeIndex);
                 if(schemeIndex){
                     this.selectedScheme=this.schemes[schemeIndex];
                     console.log("stateContractAddress = "+this.selectedScheme.centralContractAddress);
                     this.allocatefundService.getStateList(this.selectedScheme.centralContractAddress).subscribe(data => {
                                                       if(data){
                                                         this.stateFund=data;
                                                         console.log("Number of charity= "+ this.stateFund.length);
                                                       } else{
                                                           console.log("error >>>>>>>>>>>>> ");
                                                       }

                                                   });




                 }else{
                   console.log("State id not defined");
                 }
             }

       changeSelectCharity(e,index){
           console.log("index = "+index);
           if(index){
               this.selectCharity=this.stateFund[index];
               this.selectCharity.homeName='Default Home';
               console.log("stateContractAddress = "+this.selectCharity.stateContractAddress);
               console.log("sanctionedAmount = "+this.selectCharity.sanctionedAmount);
               this.reportsService.getDisbursementList(this.selectCharity.stateContractAddress).subscribe(data => {
                                                       this.disbursements=data;
                                                       console.log("Number of disbursements = "+this.disbursements.length);
                                                     });
               console.log("sanctionedAmount post host call = "+this.selectCharity.sanctionedAmount);
           }else{
             console.log("State id not defined");
           }
       }

       onSelectBeneficiary(e, index){
            this.selectedBeneficiaryAddress=this.disbursements[index].disbursementAddress;
            console.log("selectedBeneficiaryAddress = "+this.selectedBeneficiaryAddress);
            this.selectedIndex=index;
       }

}
