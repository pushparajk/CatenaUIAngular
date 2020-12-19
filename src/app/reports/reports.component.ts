import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from './services/reports.service';
import { SchemelistService } from '../schemelist/schemelist.service';
import { AllocatefundService } from '../allocatefund/services/allocatefund.service';
import { Scheme } from '../createscheme/scheme';
import { Fund } from '../allocatefund/Fund';
import { Disbursement } from '../funddisbursement/disbursement';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

   schemes: Scheme[] = [];
   selectedScheme: Scheme = new Scheme();
   stateFund: Fund[]=[];
   selectedCharityAddress: string;
   disbursement: Disbursement;
   selectedIndex: number;
  constructor(private route: ActivatedRoute,private router: Router,private schemelistService:SchemelistService,private allocatefundService: AllocatefundService,private reportsService:ReportsService) { }

  ngOnInit(): void {
      this.getSchemes();
  }

  verify(): void{
          console.log("Selected index inside verify = "+this.selectedIndex);
          console.log("Selected charity address inside verify = "+this.selectedCharityAddress);
          this.reportsService.verifyCharityHouse(this.selectedCharityAddress).subscribe(data => {
                                                       this.disbursement=data;
                                                       console.log("disbursement status = "+this.disbursement.contractStatus);
                                                       this.stateFund[this.selectedIndex].contractStatus=this.disbursement.contractStatus;
                                                       console.log("Selected index inside verify = "+this.selectedIndex);
                                                     });
    }

  goToDashboard(){
      this.router.navigate(['/dashboard']);
    }

    getSchemes(): void{
            console.log("Inside get Schemes in schemelist component ts");

           this.schemelistService.getSchemes()
                .subscribe(data => {
                                      if(data){
                                        this.schemes = data;
                                        console.log("length of data = "+data.length);
                                        console.log("length of this.schemes = "+this.schemes.length);
                                      } else{
                                          console.log("error >>>>>>>>>>>>> ");
                                      }
                                    });
        }

          changeSelectScheme(e,schemeIndex){
                console.log("scheme index = "+schemeIndex);
                if(schemeIndex){
                    this.selectedScheme=this.schemes[schemeIndex];
                    console.log("this.selectedScheme.schemeAmount = "+this.selectedScheme.schemeAmount);
                    console.log("this.selectedScheme.schemeBalanceAmount = "+this.selectedScheme.schemeBalanceAmount);
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

    onSelectCharity(event,index){
      console.log("selectedSchemeAddress = "+this.stateFund[index].stateContractAddress);
      console.log("index = "+index);
      this.selectedCharityAddress=this.stateFund[index].stateContractAddress;
      this.selectedIndex=index;
      console.log("selectedSchemeAddress = "+this.selectedCharityAddress);
    }
}
