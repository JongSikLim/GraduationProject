import { Component, OnInit } from '@angular/core';
import { AF } from '../providers/af';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afService: AF, private router: Router) {}

  loginGoogle(){
    this.afService.loginWithGoogle().then((data)=>{
      //함수 호출이후에 메인페이지로 접속
      this.router.navigate(['']);
    })
  }
  loginFb(){
    this.afService.loginWithFb().then((data)=>{
      //함수 호출이후에 메인페이지로 접속
      this.router.navigate(['']);
    })
  }


  ngOnInit() {
  }

}
