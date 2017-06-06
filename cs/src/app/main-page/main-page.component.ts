import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {EnrollPageComponent} from '../enroll-page/enroll-page.component';
import {SellPageComponent} from '../sell-page/sell-page.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {StorageService} from '../providers/storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  enrollProductBarcode : string;
  sellProductBarcode : string;
  items : FirebaseListObservable<any[]>;
  obj = {pName:'', pPrice:''};
  testImages;
  constructor(public dialog : MdDialog, private af : AngularFire, private ref : StorageService) {
      this.items = af.database.list('/items');
  }

    openEnrollDialog(){
      let dialogRef = this.dialog.open(EnrollPageComponent);
      dialogRef.afterClosed().subscribe(result=>{
        this.enrollProductBarcode = result[0];
        this.obj.pName = result[1];
        this.af.database.list('/items').push(this.obj);
      });

    }
    openSellDialog(){
      let dialogRef = this.dialog.open(SellPageComponent);
      dialogRef.afterClosed().subscribe(result=>{
        this.sellProductBarcode = result;
      });
    }

    uploadImage(e){
      this.ref.upload(e);
    }
  ngOnInit() {
  }

}
