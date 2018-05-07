import { Component } from '@angular/core';
import { Post } from './post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Blog OpenClassRoom';
  posts: Post[];

  constructor() {
    this.posts = new Array(4);

    let post = new Post();
    post.title = 'Post 1';
    post.content = 'Le Lorem Ipsum est simplement du faux texte employé dans la composition';
    post.loveIts = 5;
    this.posts[0] = post;

    post = new Post();
    post.title = 'Post 2';
    post.content = 'Le Lorem Ipsum est simplement du faux texte employé dans la composition';
    post.loveIts = 1;
    this.posts[1] = post;

    post = new Post();
    post.title = 'Post 3';
    post.content = 'Le Lorem Ipsum est simplement du faux texte employé dans la composition';
    post.loveIts = -2;
    this.posts[2] = post;

    post = new Post();
    post.title = 'Post 4';
    post.content = 'Le Lorem Ipsum est simplement du faux texte employé dans la composition';
    post.loveIts = 0;
    this.posts[3] = post;
  }
}
