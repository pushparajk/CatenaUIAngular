import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DonationComponent } from './donation/donation.component';
import { DonationPage2Component } from './donation-page2/donation-page2.component';
import { CreateschemeComponent } from './createscheme/createscheme.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllocatefundComponent } from './allocatefund/allocatefund.component';
import { FunddisbursementComponent } from './funddisbursement/funddisbursement.component';
import { ReportsComponent } from './reports/reports.component';
import { SchemelistComponent } from './schemelist/schemelist.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { Createscheme2Component } from './createscheme2/createscheme2.component';
import { Allocatefund2Component } from './allocatefund2/allocatefund2.component';

import { HttpClientModule } from '@angular/common/http';
import { DonationServiceService } from './donation/services/donation-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';


import { ChartsModule } from 'ng2-charts';
import { TreeviewModule } from 'ngx-treeview';
import { DisbursementConfirmationComponent } from './funddisbursement/disbursement-confirmation/disbursement-confirmation.component';
import { CharitytrustreportComponent } from './reports/charitytrustreport/charitytrustreport.component';
import { MloverlayComponent } from './mloverlay/mloverlay.component';






@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DonationComponent,
    DonationPage2Component,
    DashboardComponent,
    CreateschemeComponent,
    AllocatefundComponent,
    FunddisbursementComponent,
    ReportsComponent,
    SchemelistComponent,
    OnboardingComponent,
    Createscheme2Component,
    Allocatefund2Component,
    DisbursementConfirmationComponent,
    CharitytrustreportComponent,
    MloverlayComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ChartsModule,
    TreeviewModule.forRoot(),
    MatDialogModule,

  ],
exports: [
MatButtonModule,
MatIconModule,
MatMenuModule,
MatListModule,
MatSidenavModule,
MatToolbarModule
],
  providers: [DonationServiceService,MloverlayComponent],
  bootstrap: [AppComponent],
  entryComponents: [
      // Needs to be added here because otherwise we can't
      // dynamically render this component at runtime

    ]
})
export class AppModule {

}
