import { Component, OnInit } from '@angular/core';
import { DisbursementService } from '../funddisbursement/services/disbursement.service';
import {Mlresponse} from "../funddisbursement/mlresponse"
@Component({
  selector: 'app-mloverlay',
  templateUrl: './mloverlay.component.html',
  styleUrls: ['./mloverlay.component.css']
})
export class MloverlayComponent implements OnInit {

  private mlresponse: Mlresponse;

  constructor(private disbursementService: DisbursementService) {
      console.log(" inside PREDICTED_STATUS = "+disbursementService.mlresponse.PREDICTED_STATUS);
      this.mlresponse=disbursementService.mlresponse;
      console.log(" inside after  PREDICTED_STATUS = "+this.mlresponse.PREDICTED_STATUS);
  }

  ngOnInit(): void {
  }

}
