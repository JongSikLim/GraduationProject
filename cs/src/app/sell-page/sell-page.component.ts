import { Component, OnInit } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-sell-page',
  templateUrl: './sell-page.component.html',
  styleUrls: ['./sell-page.component.css']
})
export class SellPageComponent implements OnInit {
  barcode : string;
  constructor(public dialogRef: MdDialogRef<SellPageComponent>){}
  ngOnInit() {
  }

}
