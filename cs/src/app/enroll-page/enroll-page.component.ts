import { Component, OnInit } from '@angular/core';
//dialog 이용
import {MdDialog, MdDialogRef, MdSelectModule} from '@angular/material';
//Angular firebase 이용
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-enroll-page',
  templateUrl: './enroll-page.component.html',
  styleUrls: ['./enroll-page.component.css']
})
export class EnrollPageComponent implements OnInit {
  barcode : string;
  discount : string;
  selectedCVS : string;
  cvsInfo : FirebaseListObservable<any[]>;

  constructor(public dialogRef: MdDialogRef<EnrollPageComponent>, private af : AngularFire) {
    this.cvsInfo = this.af.database.list('/cvs');
    console.log(this.cvsInfo);
  }

  ngOnInit() {
    this.cvsInfo = this.af.database.list('/cvs');
  }

}
