import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input()
  currentPost: Post;

  ngOnInit() {
  }

  onClickLoveIt(): void {
    this.currentPost.loveIts += 1;
  }

  onClickDontLoveIt(): void {
    this.currentPost.loveIts -= 1;
  }
}
