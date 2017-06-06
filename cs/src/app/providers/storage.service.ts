import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class StorageService {
  storageRef = firebase.storage().ref();
  file = File;
  constructor() {}
  upload(e){
    let productsRef = this.storageRef.child('productImages/'+this.file.name);
    this.file = e.target.files[0];
    productsRef.put(this.file).then(function(snapshot){
      console.log('success upload');
    });
  }

  pause(){

  }
  // // Upload the file and metadata
  // var uploadTask = storageRef.child('images/mountains.jpg').put(file);
  //
  // // Pause the upload
  // uploadTask.pause();
  //
  // // Resume the upload
  // uploadTask.resume();
  //
  // // Cancel the upload
  // uploadTask.cancel();
}
