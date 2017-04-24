import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    console.log(this.items);
   }

  ngOnInit() {
  }

}
