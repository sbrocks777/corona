import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
    private authService: AuthService
  ) {}

  getAll() {
    return this.http.get(`${this.apiUrl}all`);
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }

  createFeed(data: any) {
    return new Promise((resolve, reject) => {
      this.authService.user$.subscribe((user) => {
        if (user) {
          resolve(
            this.db.collection('feed').add({
              ...data,
              uid: user.uid,
              createDate: firebase.default.firestore.FieldValue.serverTimestamp(),
            })
          );
        } else {
          reject({ errMessege: 'Not Logged!' });
        }
      });
    });
  }

  getAllFeeds() {
    return this.db.collection('feed').valueChanges({ idField: 'id' });
  }

  deleteFeed(id: string) {
    this.db.collection('feed').doc(id).delete();
  }
}
