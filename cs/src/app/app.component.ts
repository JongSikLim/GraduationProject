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
  private uid: string;
  constructor(public afService: AF, private router: Router, private userService : UserService) {

    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          //비로그인 상태 체킹 후 로그인 화면으로 전환.
          this.router.navigate(['login']);
          this.isLoggedIn = false;

        }
        else {
          this.isLoggedIn = true;
          // 메인화면으로 라우트
          this.router.navigate(['']);
          this.uid = auth.uid;
        }
        this.userService.getNowUserInfo().subscribe((res)=>{
          this.isFranchisee = res[0].isFranchisee;
        });

      }

    );


  }
  logout() {
    this.afService.logout();
  }
  ngOnInit(){

  }
}
