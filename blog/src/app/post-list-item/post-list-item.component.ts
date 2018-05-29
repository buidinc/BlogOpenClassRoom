import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {
  constructor(private postsService: PostsService) {}

  @Input() currentPost: Post;
  @Input() index: number;

  postSubscription: Subscription;

  ngOnInit() {
    this.postSubscription = this.postsService.getSinglePost(this.index).subscribe((post: Post) => {
      this.currentPost = post;
    });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  onClickLoveIt(): void {
    this.currentPost.loveIts += 1;
    this.postsService.savePosts();
  }

  onClickDontLoveIt(): void {
    this.currentPost.loveIts -= 1;
    this.postsService.savePosts();
  }

  onClickDeletePost(): void {
    this.postsService.removePost(this.currentPost);
  }
}
