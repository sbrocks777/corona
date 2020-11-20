import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState;
  }

  /** Send email verification */
  async sendVerificationMail() {
    const user = await this.afAuth.currentUser;
    user.sendEmailVerification();
  }

  /** Login with google */
  googleLogin() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    this.afAuth.signInWithPopup(provider).then((credential) => {
      this.router.navigate(['']);
    });
  }

  /** Login with email */
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  /** SignUp with email */
  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['register']);
  }

  /** Password reset email */
  passwordReset(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
