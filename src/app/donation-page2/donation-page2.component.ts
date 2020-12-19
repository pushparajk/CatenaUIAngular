import { Component, OnInit, Input } from '@angular/core';
import { Donation } from '../donation/donation';
import { DonationServiceService } from '../donation/services/donation-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-donation-page2',
  templateUrl: './donation-page2.component.html',
  styleUrls: ['./donation-page2.component.css']
})
export class DonationPage2Component implements OnInit {


  constructor(private route: ActivatedRoute,private router: Router,private donationService: DonationServiceService) {
  }

  ngOnInit(): void {

  }

  get donation(): Donation{
      console.log('I am inside get Donation in page 2');

      return this.donationService.donation;
  }

  goToDashboard(){
      this.router.navigate(['/home']);
    }


}
