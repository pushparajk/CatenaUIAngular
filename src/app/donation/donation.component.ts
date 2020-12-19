import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Donation } from './donation';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationServiceService } from './services/donation-service.service';
import { SchemelistService } from '../schemelist/schemelist.service';
import { Scheme } from '../createscheme/scheme';


@Component({
selector: 'app-donation',
templateUrl: './donation.component.html',
styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

   schemes: Scheme[] = [];
    selectedScheme: Scheme = new Scheme();
    selectedIndex: number;

donation1: Donation = new Donation();

constructor(private route: ActivatedRoute,private router: Router,private donationService: DonationServiceService, private schemelistService:SchemelistService) {
    //this.localDonation=donation;
  }

  async ngOnInit() {
      await this.getSchemes();
  }


  get donation(): Donation{
      return this.donationService.donation;
  }

  set donation(localDonation: Donation){
       this.donationService.donation = localDonation;
  }


  save(): void {
    console.log('**** First Name = '+this.donation1.fName)
    this.donationService.save(this.donation1)
      .subscribe(data =>{
        console.log(data);
        this.goToConfiration();
        data.fName=this.donation1.fName;
        data.lName=this.donation1.lName;
        this.donationService.donation = data;
      },error => console.log('exception in save contract error = '+error));
  }


  goToConfiration(){

    this.router.navigate(['/donationconfirm']);
  }

  goToDashboard(){
      this.router.navigate(['/home']);
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
                 }else{
                   console.log("State id not defined");
                 }
             }


}

