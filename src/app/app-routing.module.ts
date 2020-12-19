import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DonationComponent} from './donation/donation.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DonationPage2Component} from './donation-page2/donation-page2.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CreateschemeComponent } from './createscheme/createscheme.component';
import { AllocatefundComponent } from './allocatefund/allocatefund.component';
import { FunddisbursementComponent } from './funddisbursement/funddisbursement.component';
import { ReportsComponent } from './reports/reports.component';
import { SchemelistComponent } from './schemelist/schemelist.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { Createscheme2Component } from './createscheme2/createscheme2.component';
import { Allocatefund2Component } from './allocatefund2/allocatefund2.component';
import {DisbursementConfirmationComponent} from './funddisbursement/disbursement-confirmation/disbursement-confirmation.component';
import { CharitytrustreportComponent } from './reports/charitytrustreport/charitytrustreport.component';


const routes: Routes = [
                          { path: '', redirectTo: '/home', pathMatch: 'full' },
                          { path:'home',component:HomepageComponent},
                          { path:'donation',component:DonationComponent},
                          { path:'donationconfirm',component:DonationPage2Component},
                          { path:'dashboard',component:DashboardComponent},
                          { path:'createscheme',component:CreateschemeComponent},
                          { path:'allocatefund',component:AllocatefundComponent},
                          { path:'disbursement',component:FunddisbursementComponent},
                          { path:'reports',component:ReportsComponent},
                          { path:'schemelist',component:SchemelistComponent},
                          { path:'onboarding',component:OnboardingComponent},
                          { path:'createscheme2',component:Createscheme2Component},
                          { path:'allocatefund2',component:Allocatefund2Component},
                          { path:'disbursementconfirm',component:DisbursementConfirmationComponent},
                          {path:'charitytrustreport',component:CharitytrustreportComponent},
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

