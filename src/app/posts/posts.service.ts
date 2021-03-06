import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';


@Injectable({providedIn: 'root'})
export class PostsService {
  // addPost(title: any, content: any) {
  //   throw new Error("Method not implemented.");
  // }
  // -- Add private to avoid editing from outside -- //
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    // return [...this.posts];
    // return this.posts;
    this.http.get<{message: string, post: Post[]}>('http://localhost:3000/api/posts')
      // tslint:disable-next-line: align
      .subscribe((postData) => {

        this.posts = postData.post;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.http
      .post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
    // this.posts.push(post);
    // this.postsUpdated.next([...this.posts]);
  }
}
