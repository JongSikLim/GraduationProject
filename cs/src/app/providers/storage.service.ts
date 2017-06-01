import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class StorageService {

  productStorageRef =firebase.storage.ref.child('productImages');
  fileName = 'test.jpg';
  spaceRef = this.productStorageRef(this.fileName);

  file = File;
  //
  /*
  // Points to the root reference
  var storageRef = firebase.storage().ref();

  // Points to 'images'
  var imagesRef = storageRef.child('images');

  // Points to 'images/space.jpg'
  // Note that you can use variables to create child values
  var fileName = 'space.jpg';
  var spaceRef = imagesRef.child(fileName);

  // File path is 'images/space.jpg'
  var path = spaceRef.fullPath

  // File name is 'space.jpg'
  var name = spaceRef.name

  // Points to 'images'
  var imagesRef = spaceRef.parent;
  */
  constructor() { }

}
