import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  save(): void {
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
