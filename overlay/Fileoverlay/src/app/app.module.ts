import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';

import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { OverlayModule } from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilePreviewOverlayService } from './file-preview-overlay/services/file-preview-overlay.service';
import { OverlayscreenComponent } from './overlayscreen/overlayscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent,
    OverlayscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        BrowserModule,
        FormsModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        OverlayModule,
        MatDialogModule,
        BrowserAnimationsModule
  ],
  providers: [FilePreviewOverlayService],
  bootstrap: [AppComponent],
  entryComponents:[FilePreviewOverlayComponent,OverlayscreenComponent]
})
export class AppModule { }
