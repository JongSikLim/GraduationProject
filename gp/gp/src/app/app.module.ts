import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputDataComponent } from './input-data/input-data.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { EnrollPageComponent } from './enroll-page/enroll-page.component';
import { SellProductComponent} from './sell-product/sell-product.component';
import { AngularFireModule } from 'angularfire2';


//angularfire를 이용하기 위해 필수적으로 선언
export const firebaseConfig = {
  apiKey: 'AIzaSyA8GuXbqozFTGfLCZU3kbWSo2bPzIcIMcI',
  authDomain: 'graduateproject-61cd9.firebaseapp.com',
  databaseURL: 'https://graduateproject-61cd9.firebaseio.com',
  storageBucket: 'graduateproject-61cd9.appspot.com',
  messagingSenderId: '735303616311'
};




@NgModule({
  declarations: [
    AppComponent,
    InputDataComponent,
    MainPageComponent,
    SellPageComponent,
    EnrollPageComponent,
    SellProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'sell',
        component: SellPageComponent
      },
      {
        path: 'enroll',
        component: EnrollPageComponent
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
