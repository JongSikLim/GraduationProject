import { Component, OnInit } from '@angular/core';
//dialog 이용
import {MdDialog, MdDialogRef} from '@angular/material';
//Angular firebase 이용
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-enroll-page',
  templateUrl: './enroll-page.component.html',
  styleUrls: ['./enroll-page.component.css']
})
export class EnrollPageComponent implements OnInit {
  obj = {pName:'test'};
  barcode : string;
  discount : string;
  constructor(public dialogRef: MdDialogRef<EnrollPageComponent>, private af : AngularFire) {}

  ngOnInit() {
  }

}
