import { Component } from '@angular/core';
import { Post } from './post';
import { Title } from '@angular/platform-browser';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog OpenClassRoom';
  posts: Post[];

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDiovJaCdgM2lIiiMgW4zTmUbpTaQMpc9Q',
      authDomain: 'blogocr-90908.firebaseapp.com',
      databaseURL: 'https://blogocr-90908.firebaseio.com',
      projectId: 'blogocr-90908',
      storageBucket: '',
      messagingSenderId: '435895345312'
    };
    firebase.initializeApp(config);
  }
}
