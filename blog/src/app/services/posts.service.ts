import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database';

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postsSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor() {}

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase
      .database()
      .ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  savePosts() {
    firebase
      .database()
      .ref('/posts')
      .set(this.posts)
      .then(() => {
        this.emitPosts();
      });
  }

  createNewPost(newPost: Post) {
    console.log(newPost);

    this.posts.push(newPost);
    this.savePosts();
  }

  removePost(post: Post) {
    const indexPostToRemove = this.posts.findIndex((postEl: Post) => {
      if (post.createdAt === postEl.createdAt) {
        return true;
      }
    });
    this.posts.splice(indexPostToRemove, 1);
    this.savePosts();
  }

  getSinglePost(id: number) {
    const postSubject = new Subject<Post>();

    firebase
      .database()
      .ref('/posts/' + id)
      .once('value', (data: DataSnapshot) => {
        postSubject.next(data.val());
      });

    return postSubject;
  }
}
