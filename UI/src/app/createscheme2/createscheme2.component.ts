import { Component, OnInit } from '@angular/core';
import { Scheme } from '../createscheme/scheme';
import { CreateschemeService } from '../createscheme/services/createscheme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createscheme2',
  templateUrl: './createscheme2.component.html',
  styleUrls: ['./createscheme2.component.css']
})
export class Createscheme2Component implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private createschemeService: CreateschemeService) { }

  ngOnInit(): void {
  }
  get scheme(): Scheme{
      console.log('I am inside get scheme in page 2');

      return this.createschemeService.scheme;
  }

  goToDashboard(){
      this.router.navigate(['/dashboard']);
    }

}
