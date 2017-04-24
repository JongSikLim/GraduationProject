import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  pName:string;
  pPrice;
  pDiscount;
  pSellPrice;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
   }

  ngOnInit() {
  }

  enrollTheProject(){
    console.log("등록이벤트 발생");
  }

}
