import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import 'rxjs/add/operator/first';
import { UserService } from '../providers/user.service';
import { OwnerEnrollMapComponent } from '../owner-enroll-map/owner-enroll-map.component';

@Component({
  selector: 'app-sign-up-franchisee',
  templateUrl: './sign-up-franchisee.component.html',
  styleUrls: ['./sign-up-franchisee.component.css'],
})
export class SignUpFranchiseeComponent implements OnInit {
  owner;
  cvsInfo={
    uid:'',
    name:'',
    cvsName:'',
    lat:'',
    lng:''
  }
  constructor(private af : AngularFire,  private userService: UserService) {}
  ngOnInit() {
    this.owner = this.userService.getNowUserInfo();
    this.owner.subscribe(res => {this.owner = res[0];});
  }
  getCoords(event){
    this.cvsInfo.lat = event.coords.lat;
    this.cvsInfo.lng = event.coords.lng;
    // console.log(this.owner);
    // console.log(this.owner.uid);
  }
  pushCVSInfo(){
    this.cvsInfo.name = this.owner.name;
    this.cvsInfo.uid = this.owner.uid;
    this.af.database.list('/cvs').push(this.cvsInfo).then(()=>{
      this.userService.userUpdate(this.owner.$key);
    }).catch(()=>{
      console.log('데이터 업데이트 실패');
      alert("등록에 실패했습니다.");

    });
  }
}
