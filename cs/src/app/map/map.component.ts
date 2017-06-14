import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat:number=35.146112;
  lng:number=129.009105;
  zoom:number=18;
  isOpen = 1;

  // cvsInfo = [
  //   {
  //   name: '동서대 3호점',
  //   lat: 35.146658,
  //   lng: 129.008004
  //   },{
  //   name: '동서대 2호점',
  //   lat: 35.146768,
  //   lng: 129.009380
  //   },{
  //   name: '동서대 1호점',
  //   lat: 35.146889,
  //   lng: 129.010654
  //   }
  // ]
  cvsInfo : FirebaseListObservable<any[]>;

  location = {};
   setPosition(position){
      this.location = position.coords;

  }

  constructor(private af : AngularFire){
    this.cvsInfo = this.af.database.list('/cvs');
  }

  ngOnInit(){
     if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        };
        //console.log(location);
     }

}
