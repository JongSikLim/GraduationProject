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
  pInfo : FirebaseListObservable<any[]>;
  product : FirebaseListObservable<any>;

  obj = {
       barcode:'',
       pName:'',
       pPrice:0,
       pDiscountPrice:0,
       pDiscountPercent:0,
       url:''
     };
  testImage;
  db;
  storage;
  imageUrl;
  constructor(public dialog :
    MdDialog, private af : AngularFire, private ref : StorageService) {
      this.db = af.database;
      this.items = af.database.list('/items');
      this.pInfo = af.database.list('/productDatabase');
      this.storage = ref;
      this.testImage=ref.storageRef.child('productImages/1.jpg').getDownloadURL().then(url=>this.testImage = url);
    }
    // imageUrl2(url){
    //   console.log('url:'+url);
    //   return this.storage.storageRef.child('productImages/'+url).getDownloadURL().then(url=>this.testImage = url);
    // }

    openEnrollDialog(){
      let dialogRef = this.dialog.open(EnrollPageComponent);
        dialogRef.afterClosed().subscribe(result=>{
        this.product = this.db.object('/productDatabase/'+result[0],{preserveSnapshot:true});

        this.product.subscribe(snapshot=>{
          this.obj.url = result[0]+'.jpg';
          this.obj.barcode=result[0];
          this.obj.pName = snapshot.val().name;
          this.obj.pPrice = snapshot.val().price;
          this.obj.pDiscountPercent = result[1];
          this.obj.pDiscountPrice = result[1] * this.obj.pPrice * 0.01;

          this.af.database.list('/items').push(this.obj);
        });
      });
    }

    getUserProfileImage(barcode: string) {
      console.log('productImages/' + barcode + '.jpg');
      return 'productImages/' + barcode + '.jpg';
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
    delete(key:string){
      this.items.remove(key);
    }


  ngOnInit() {
  }

}
