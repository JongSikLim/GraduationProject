//앙귤라 파이어베이스 서비스
import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';


@Injectable()
export class AF {
  constructor(public af: AngularFire) {}
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }
}

// // src/app/providers/af.ts
// import {Injectable} from "@angular/core";
// import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
// @Injectable()
// export class AF {
//   constructor(public af: AngularFire) {}
//   /**
//    * Logs in the user
//    * @returns {firebase.Promise<FirebaseAuthState>}
//    */
//   loginWithGoogle() {
//     return this.af.auth.login({
//       provider: AuthProviders.Google,
//       method: AuthMethods.Popup,
//     });
//   }
//   /**
//    * Logs out the current user
//    */
//   logout() {
//     return this.af.auth.logout();
//   }
// }