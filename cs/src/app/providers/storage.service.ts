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

  download(url:string):any{
    let storageRef = firebase.storage().ref();
    console.log("in Service: "+url);
    return storageRef.child('productImages/'+url+'.jpg').getDownloadURL();
  }

}
