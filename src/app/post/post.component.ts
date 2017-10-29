import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Posts } from '../service/post/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Posts = new Posts();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost() {
    this.postService.addPost(this.post).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
