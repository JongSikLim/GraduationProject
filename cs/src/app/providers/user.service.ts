import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireAuth } from 'angularfire2';
import { AF } from './af';

@Injectable()
export class UserService  {
  userRef:FirebaseListObservable<any>;
  constructor(private af: AngularFire, private afLoginService : AF){
    this.userRef = af.database.list('/user');
  }

  getAllUserInfo():FirebaseListObservable<any>{
    return this.userRef;
  }

  getNowUserInfo():FirebaseListObservable<any>{
    let now_auth;
    this.afLoginService.getId().subscribe((auth)=>now_auth = auth.uid);
    return this.af.database.list('/user',{
      query:{
        orderByChild:'uid',
        equalTo:now_auth
      }
    });
  }
  userFranchiseeChange(uid){
    return this.af.database.list('/user',{
      query:{
        orderByChild:'uid',
        equalTo:uid
      }
    });
  }
  userUpdate(key){
    this.userRef.update(key, {isFranchisee: true});
    console.log("프랜차이즈 등록 완료");
  }
}
