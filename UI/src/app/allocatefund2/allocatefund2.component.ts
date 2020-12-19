import { Component, OnInit } from '@angular/core';
import { Fund } from '../allocatefund/fund';
import { AllocatefundService } from '../allocatefund/services/allocatefund.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allocatefund2',
  templateUrl: './allocatefund2.component.html',
  styleUrls: ['./allocatefund2.component.css']
})
export class Allocatefund2Component implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private allocatefundService: AllocatefundService) { }

  ngOnInit(): void {
  }
  get fund(): Fund{
      console.log('I am inside get scheme in page 2');
      return this.allocatefundService.fund;
  }

  goToDashboard(){
      this.router.navigate(['/dashboard']);
    }

}
