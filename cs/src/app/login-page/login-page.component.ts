import { Component, OnInit } from '@angular/core';
import { AF } from '../providers/af';
import {Router} from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userInfo = {
    uid:'',
    name:'',
    email:'',
    photoURL:'',
    isFranchisee:false,
  }

  constructor(public afService: AF, private router: Router, private af : AngularFire) {}

  loginGoogle(){
    this.afService.loginWithGoogle().then((data)=>{

      this.userInfo.name = data.auth.displayName;
      this.userInfo.email = data.auth.email
      this.userInfo.photoURL = data.auth.photoURL
      this.userInfo.uid = data.uid;
      this.checkedUser();
      //함수 호출이후에 메인페이지로 접속
      this.router.navigate(['']);

    })
  }
  loginFb(){
    this.afService.loginWithFb().then((data)=>{
      //함수 호출이후에 메인페이지로 접속
      this.router.navigate(['']);
      this.userInfo.name = data.auth.displayName;
      this.userInfo.email = data.auth.email
      this.userInfo.photoURL = data.auth.photoURL;
      this.userInfo.uid = data.uid;
      this.checkedUser();
    })
  }
  checkedUser(){
    const queryObservable = this.af.database.list('/user',{
      query:{
        orderByChild: 'uid',
        equalTo: this.userInfo.uid
      }
    });
    queryObservable.subscribe(res=>{
      if(res.length >= 1){
        return;
      }else{
        this.registUserInfo();
      }
    });
  }
  registUserInfo(){
    this.af.database.list('/user').push(this.userInfo);
  }
  ngOnInit() {
  }

}
