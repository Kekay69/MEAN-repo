// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:  ['./post-create.component.css']
})
export class PostCreateComponent {
  // -- Two way binding -- //
  // enteredValue = '';
  // newPost = 'NO CONTENT';
  enteredContent = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter();
  // @Output() postCreated = new EventEmitter<Post>();

  // onAddPost(postInput: HTMLTextAreaElement) {
    // console.log(postInput);
    // console.dir(postInput);

    // alert('Post added!');
    // this.newPost = 'The user\'s post';
    // this.newPost = postInput.value;

    constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }
    // const post: Post = {
      // title: this.enteredTitle,
      // content: this.enteredContent
    //   title: form.value.title,
    //   content: form.value.content
    // };

    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
