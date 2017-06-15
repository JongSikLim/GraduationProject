import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { StorageService } from '../providers/storage.service';
import {CvsService} from '../providers/cvs.service';
import {AF} from '../providers/af';
//modal
import {MdDialog, MdDialogRef} from '@angular/material';
import {EnrollPageComponent} from '../enroll-page/enroll-page.component';

@Component({
  selector: 'app-management-franchisee',
  templateUrl: './management-franchisee.component.html',
  styleUrls: ['./management-franchisee.component.css']
})
export class ManagementFranchiseeComponent implements OnInit {
  obj = {
       barcode:'',
       pName:'',
       pPrice:0,
       pDiscountPrice:0,
       pDiscountPercent:0,
       url:'',
       location:''
     };
  cvsName : string;
  cvsInfo;
  products: any;
  constructor(private af : AngularFire,
    private dialog: MdDialog,
    private storage: StorageService,
    private cvsService: CvsService,
    private afService: AF) {}

  ngOnInit() {
    this.products;
    this.cvsService.getCVSProductInfo()
    .subscribe((cvs)=>{

        this.cvsName = cvs[0].cvsName;
        this.products = this.af.database.list('/items',{
          query:{
            orderByChild:'location',
            equalTo: cvs[0].cvsName
          }
        });
        console.log(this.products);
    });
    this.cvsService.getNowUsersCVSInfo().subscribe((res)=>{this.cvsInfo = res[0].name});
  }











  openEnrollDialog(){
    let dialogRef = this.dialog.open(EnrollPageComponent);
    let product;
    dialogRef.afterClosed().subscribe(result=>{
      product = this.af.database.object('/productDatabase/'+result[0],{preserveSnapshot:true});
      product.subscribe(snapshot=>{
        this.storage.download(result[0]).then((res=>{
            this.obj.url = res;
            this.obj.barcode=result[0];
            this.obj.pName = snapshot.val().name;
            this.obj.pPrice = snapshot.val().price;
            this.obj.pDiscountPercent = result[1];
            this.obj.pDiscountPrice = this.obj.pPrice * (1 - (this.obj.pDiscountPercent*0.01))
            this.obj.location = this.cvsName;
            this.af.database.list('/items').push(this.obj);
        } ));
      });
    });
  }





}
