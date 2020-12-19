import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
const routes: Routes = [ {path:'overlay',component:FilePreviewOverlayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
