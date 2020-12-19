import { Component, OnInit } from '@angular/core';
import { DisbursementService } from '../services/disbursement.service';
import { Disbursement } from '../disbursement';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-disbursement-confirmation',
  templateUrl: './disbursement-confirmation.component.html',
  styleUrls: ['./disbursement-confirmation.component.css']
})
export class DisbursementConfirmationComponent implements OnInit {

  constructor(private disbursementService: DisbursementService,private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
  }
  get disbursement(): Disbursement{
      console.log('I am inside get scheme in page 2');

      return this.disbursementService.disbursement;
  }

    goToDashboard(){
        this.router.navigate(['/dashboard']);
      }

}
