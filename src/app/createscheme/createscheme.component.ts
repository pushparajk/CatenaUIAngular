import { Component, OnInit } from '@angular/core';
import { Scheme } from './scheme';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateschemeService } from './services/createscheme.service';

@Component({
  selector: 'app-createscheme',
  templateUrl: './createscheme.component.html',
  styleUrls: ['./createscheme.component.css']
})
export class CreateschemeComponent implements OnInit {
  scheme: Scheme = new Scheme();

  constructor(private route: ActivatedRoute,private router: Router,private createschemeService: CreateschemeService) { }

  ngOnInit(): void {
  }

    save(): void {
    console.log('**** First Name = '+this.scheme.schemeName)
    this.createschemeService.save(this.scheme)
      .subscribe(data =>{
        console.log(data);
        this.goToConfiration();
        this.createschemeService.scheme = data;
      },error => console.log('exception in save contract error = '+error));
  }


  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  goToConfiration(){
    this.router.navigate(['/createscheme2']);
  }

}
