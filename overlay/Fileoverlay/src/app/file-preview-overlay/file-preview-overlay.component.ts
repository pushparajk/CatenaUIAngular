  import { Component, OnInit, Input } from '@angular/core';
  import { FilePreviewOverlayService } from './services/file-preview-overlay.service';
  import {MatDialog,MatDialogConfig} from "@angular/material/dialog"
  import {OverlayscreenComponent} from "../overlayscreen/overlayscreen.component";
  @Component({
    selector: 'app-file-preview-overlay',
    templateUrl: './file-preview-overlay.component.html',
    styleUrls: ['./file-preview-overlay.component.css']
  })
  export class FilePreviewOverlayComponent implements OnInit {
   files = [
      { name: 'image_1.jpg', path: '' },
      { name: 'image_2.jpg', path: '' },
      { name: 'image_3.jpg', path: '' },
      { name: 'image_4.jpg', path: '' },
      { name: 'image_5.jpg', path: '' }
    ]
    constructor(private filePreviewOverlayService: FilePreviewOverlayService, private dialog: MatDialog) { }

    ngOnInit(): void {
    }

    onCreate(){
        console.log("Inside on create method.....");
        const dialogConfig=new MatDialogConfig();
        //dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        dialogConfig.width="50%"
        dialogConfig.height="40%"
        this.dialog.open(OverlayscreenComponent,dialogConfig);
    }

  }
