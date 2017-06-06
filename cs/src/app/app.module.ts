import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


//추가컴포넌트
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

//material 디자인 모듈
import {MaterialModule, MaterialRootModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdToolbarModule, MdDialogModule,MdInputModule, MdListModule} from '@angular/material';
import {MdCardModule,MdGridListModule} from '@angular/material';

import 'hammerjs';

//angular firebase 모듈
import { AngularFireModule } from 'angularfire2';
import { AF } from "./providers/af";

//라우팅 기능울 실행하기 위한 모듈
import { RouterModule, Routes } from '@angular/router';
import { EnrollPageComponent } from './enroll-page/enroll-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';

//service 목록
import {StorageService} from "./providers/storage.service";


//angularfire를 이용하기 위해 필수적으로 선언
export const firebaseConfig = {
  apiKey: 'AIzaSyA8GuXbqozFTGfLCZU3kbWSo2bPzIcIMcI',
  authDomain: 'graduateproject-61cd9.firebaseapp.com',
  databaseURL: 'https://graduateproject-61cd9.firebaseio.com',
  storageBucket: 'graduateproject-61cd9.appspot.com',
  messagingSenderId: '735303616311'
};




const routes: Routes =[
  {path:'', component:MainPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'sell', component:SellPageComponent},
  {path:'enroll', component:EnrollPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    EnrollPageComponent,
    SellPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //angualr material module 추가
    MaterialRootModule, MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdDialogModule,MdInputModule, MdListModule,
    MdCardModule,MdGridListModule,
    //라우팅 추가
    RouterModule.forRoot(routes),

    //파이어베이스 초기화
    AngularFireModule.initializeApp(firebaseConfig)
  ],
//  exports: [MdButtonModule, MdCheckboxModule],
  providers: [
    AF,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
