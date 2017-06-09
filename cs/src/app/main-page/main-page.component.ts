import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {EnrollPageComponent} from '../enroll-page/enroll-page.component';
import {SellPageComponent} from '../sell-page/sell-page.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {StorageService} from '../providers/storage.service';


//for modal
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';




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

  constructor(
    public dialog : MdDialog
    , private af : AngularFire
    , private ref : StorageService
    , overlay: Overlay
    , vcRef: ViewContainerRef
    , public modal: Modal) {
      overlay.defaultViewContainer = vcRef;
      this.db = af.database;
      this.items = af.database.list('/items');
      this.pInfo = af.database.list('/productDatabase');
      this.storage = ref;
      this.testImage=ref.storageRef.child('productImages/1.jpg').getDownloadURL().then(url=>this.testImage = url);
    }

    openEnrollDialog(){
      let dialogRef = this.dialog.open(EnrollPageComponent);
        dialogRef.afterClosed().subscribe(result=>{
        this.product = this.db.object('/productDatabase/'+result[0],{preserveSnapshot:true});
        this.product.subscribe(snapshot=>{
          this.ref.download(result[0]).then((res=>{
              this.obj.url = res;
              console.log(res);
              this.obj.barcode=result[0];
              this.obj.pName = snapshot.val().name;
              this.obj.pPrice = snapshot.val().price;
              this.obj.pDiscountPercent = result[1];
              this.obj.pDiscountPrice = result[1] * this.obj.pPrice * 0.01;
              this.af.database.list('/items').push(this.obj);
          } ));
        });
      });
    }

    openSellDialog(){
      let dialogRef = this.dialog.open(SellPageComponent);
      dialogRef.afterClosed().subscribe(result=>{
        this.sellProductBarcode = result;
      });
    }
    sellProduct(key:string){
      this.delete(key);
    }
    uploadImage(e){
      this.ref.upload(e);
    }
    delete(key:string){
      this.items.remove(key);
    }

    openModal(key:string){
      this.modal.confirm()
                .size('sm')
                .isBlocking(true)
                .showClose(true)
                .keyboard(27)
                .dialogClass('modal-dialog')
                .headerClass('modal-header')
                .title('구매의사확인')
                .body('해당 제품을 구매하시겠습니까?')
                .bodyClass('modal-body')
                .footerClass('modal-footer')
                .okBtn('구매하기')
                .okBtnClass('btn btn-success purchase')
                .cancelBtn('취소하기')
                .cancelBtnClass('btn btn-default cancel')
                .open().then((res)=>{
                    res.result.then(result => {
                      if(result === true) this.delete(key);

                  }).catch(()=>{})
                });

    }

  ngOnInit() {
  }

}
