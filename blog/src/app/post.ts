import * as firebase from 'firebase';
export class Post {
  loveIts = 0;
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(public title: string, public content: string) {
  }
}
