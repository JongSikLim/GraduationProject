import { Component } from '@angular/core';
import { AF } from './providers/af';
import { Router } from '@angular/router'
import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isLoggedIn: boolean;
  private isFranchisee: boolean;
  uid;
  constructor(public afService: AF, private router: Router, private userService : UserService) {


    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          //비로그인 상태 체킹 후 로그인 화면으로 전환.

          this.isLoggedIn = false;
          this.router.navigate(['login']);


        }
        else {
          this.isLoggedIn = true;
          this.userService.userFranchiseeChange(auth.uid).subscribe((res)=>{
            this.isFranchisee=res[0].isFranchisee;
          });

          this.router.navigate(['']);
        }
      }
    );


  }
  logout() {
    this.afService.logout();
  }
  ngOnInit(){
    // this.userService.getNowUserInfo().subscribe((res)=>{
    //     console.log('먼저');
    //     if(res){this.isFranchisee = res[0].isFranchisee; console.log(res[0].isFranchisee)}
    //     else{console.log("없다.");}
    // });
  }
}
