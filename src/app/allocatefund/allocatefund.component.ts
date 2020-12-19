import { Component, OnInit } from '@angular/core';
import { Fund } from './fund';
import { ActivatedRoute, Router } from '@angular/router';
import { AllocatefundService } from './services/allocatefund.service';
import { SchemelistService } from '../schemelist/schemelist.service';
import { Scheme } from '../createscheme/scheme';

@Component({
  selector: 'app-allocatefund',
  templateUrl: './allocatefund.component.html',
  styleUrls: ['./allocatefund.component.css']
})
export class AllocatefundComponent implements OnInit {
fund: Fund = new Fund();
fundList: Fund[]=[];
  scheme: Scheme=new Scheme();
selectedCharityHomeId: string;
  constructor(private route: ActivatedRoute,private router: Router,private allocatefundService: AllocatefundService, private schemelistService: SchemelistService) { }
  selectSchemeAddress: string;

  selectedHomeName: string;
  ngOnInit(): void {
    console.log("selected address in selected Scheme Address in selectlist service = "+this.schemelistService.selectedSchemeAddress);
    this.getSchemeDetails(this.schemelistService.selectedSchemeAddress);
     console.log('**** Inside ngOninit method allocateAmount = '+this.scheme.schemeName)
        console.log('**** Inside save method centralAddress = '+this.scheme.centralContractAddress)
    this.getStateMasterList();

  }

    save(): void {
    console.log('**** this.selectedCharityHomeId= '+this.selectedCharityHomeId)
    console.log('**** this.selectedHomeName= '+this.selectedHomeName)
    this.fund.stateId=this.selectedCharityHomeId;
    this.fund.homeName=this.selectedHomeName;
            console.log("this.fund.schemeName = "+this.fund.schemeName);
            console.log("this.fund.schemesanctionedAmount ="+this.fund.schemesanctionedAmount)
            console.log("this.fund.centralAddress = "+this.fund.centralAddress)
    this.allocatefundService.save(this.fund)
      .subscribe(data =>{
        console.log(data);
        this.goToConfiration();
        this.allocatefundService.fund = data;
      },error => console.log('exception in save contract error = '+error));
  }


  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  goToConfiration(){
    this.router.navigate(['/allocatefund2']);
  }

  getSchemeDetails(address): void{
        console.log("Inside get Schemes in schemelist component ts");

       this.schemelistService.getSchemeDetails(address)
            .subscribe(data => {
                                  if(data){
                                    this.scheme = data;
                                    console.log("Scheme Name inside allocate fund= "+ this.scheme.schemeAmount);
                                   this.fund.schemeName=this.scheme.schemeName;
                                    this.fund.schemesanctionedAmount=this.scheme.schemeAmount;
                                    this.fund.centralAddress=this.scheme.centralContractAddress;
                                  } else{
                                      console.log("error >>>>>>>>>>>>> ");
                                  }
                                });

    }

    selectCharityHome(event: any){
      this.selectedCharityHomeId=event.target.value;
      console.log("selectedCharityHomeId = "+this.selectedCharityHomeId);
    }

    getStateMasterList(){
     this.allocatefundService.getStateMasterList()
          .subscribe(data =>{
            this.fundList = data;
            console.log("length of the fund list = "+this.fundList.length);
          },error => console.log('exception in save contract error = '+error));
    }

   changeSelectCharity(e,index){
        console.log("index = "+index);
        console.log("this.fundList[index].stateId = "+this.fundList[index].stateId);
         console.log("this.fundList[index].homeName = "+this.fundList[index].homeName);

        if(index){
            this.selectedCharityHomeId=this.fundList[index].stateId;
            this.selectedHomeName=this.fundList[index].homeName;
        }else{
          console.log("index is  not defined");
        }


         //this.fund.schemeName=this.scheme.schemeName;
         //this.fund.schemesanctionedAmount=this.scheme.schemeAmount;
         //this.fund.centralAddress=this.scheme.centralContractAddress;
    }

}
