import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-owner-enroll-map',
  templateUrl: './owner-enroll-map.component.html',
  styleUrls: ['./owner-enroll-map.component.css']
})
export class OwnerEnrollMapComponent implements OnInit {
  lat:number=35.146112;
  lng:number=129.009105;
  zoom:number=18;
  clickCoords={lat:'', lng:''};
  // @Output() getCoords : EventEmitter<this.clickCoords>= new EventEmitter<this.clickCoords>();
  @Output() outEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  getCoordinate($event){
    this.clickCoords.lat = $event.coords.lat;
    this.clickCoords.lng = $event.coords.lng;
    this.outEventEmitter.emit($event);
  }

  ngOnInit() {
  }

}
