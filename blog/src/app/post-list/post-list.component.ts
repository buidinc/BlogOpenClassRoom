import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(private postsService: PostsService) {}

  @Input() posts: Post[] = [];
  postsSubcription: Subscription;

  ngOnInit() {
    this.postsSubcription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        this.posts = this.posts.sort((a: Post, b: Post) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    );
    this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.postsSubcription.unsubscribe();
  }
}
