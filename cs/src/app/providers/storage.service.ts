import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable()
export class StorageService {
  storageRef = firebase.storage().ref();

  file = File;
  // gsReference = firebase.storage().refFromURL('gs://graduateproject-61cd9.appspot.com/productImages/1.jpg');
  gsURL;
  sanitizerURL;
  constructor(public sanitizer: DomSanitizer){
    this.sanitizerURL = sanitizer.bypassSecurityTrustUrl('gs://graduateproject-61cd9.appspot.com/productImages/1.jpg');
    // this.gsURL=firebase.storage().refFromURL(this.sanitizerURL);
  }



  upload(e){
    let productsRef = this.storageRef.child('productImages/'+this.file.name);
    this.file = e.target.files[0];
    productsRef.put(this.file).then(function(snapshot){
      console.log('success upload');
    });
  }

  download(){
    let storage = firebase.storage();
    let productsRef = this.storageRef.child('productImages/');



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
