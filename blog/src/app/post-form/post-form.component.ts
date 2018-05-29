import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private postsService: PostsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSaveForm() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;

    this.postsService.createNewPost(new Post(title, content));

    this.router.navigate(['/posts']);
  }
}
