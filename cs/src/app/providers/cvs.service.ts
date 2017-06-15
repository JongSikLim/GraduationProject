import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AF } from './af';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CvsService {
  cvsRef;
  itemsRef;
  constructor(private af : AngularFire, private afService: AF) {
    this.cvsRef = this.af.database.list('/cvs');
    this.itemsRef = this.af.database.list('/items');
  }
  getCVSInfo(){
    return this.cvsRef;
  }
  getNowUsersCVSInfo(){
    let now_auth;
    this.afService.getId().subscribe(auth=>now_auth=auth.uid);

    return this.af.database.list('/cvs',{
      query:{
        orderByChild:'uid',
        equalTo:now_auth
      }
    });
  }

  cvsUpdate(key, cvs){
    this.cvsRef.update(key,cvs);
  }

  getCVSProductInfo(){
    // let now_auth=this.afService.getId();
    let now_cvsName;
    console.log('b');
    return this.getNowUsersCVSInfo();
    // .subscribe((cvs)=>{
    //   //console.log();
    //   now_cvsName=cvs[0].cvsName;
    //   return this.af.database.list('/items',{
    //      query:{
    //        orderByChild:'location',
    //        equalTo: now_cvsName
    //      }
    //    });
    //
    // });




    // return this.af.database.list('/itmes',{
    //    query:{
    //      orderByChild:'location',
    //      equalTo:now_cvsName
    //    }
    //  });



  }
}
