import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemelistService } from './schemelist.service';
import { AllocatefundService } from '../allocatefund/services/allocatefund.service';

import { Scheme } from '../createscheme/scheme';
@Component({
  selector: 'app-schemelist',
  templateUrl: './schemelist.component.html',
  styleUrls: ['./schemelist.component.css']
})
export class SchemelistComponent implements OnInit {
  selectedSchemeAddress: string;
  schemes: Scheme[] = [];

  constructor(private route: ActivatedRoute,private router: Router,private schemelistService: SchemelistService,private allocatefundService: AllocatefundService) { }

  ngOnInit(): void {
  this.getSchemes();

  }

  goToAllocateFund(){
  this.schemelistService.selectedSchemeAddress=this.selectedSchemeAddress;

    this.router.navigate(['/allocatefund']);
  }

  goToDisbursement(){
  this.allocatefundService.centralAddress=this.selectedSchemeAddress;

  console.log("Before calling disbursement  address = "+this.allocatefundService.centralAddress);
    this.router.navigate(['/disbursement']);
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

    onSelectScheme(event: any){
      this.selectedSchemeAddress=event.target.value;
      console.log("selectedSchemeAddress = "+this.selectedSchemeAddress);
    }

}
