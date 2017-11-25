import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../service/post/post';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Posts[];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => this.posts = data['postList']
  );
    // this.postService.getPost().subscribe((data)=>this.posts=data)

    this.postService.getPhotos().subscribe((event) => {
      if (event.type === HttpEventType.DownloadProgress) {
        console.log(event.total)
        console.log(event.loaded)
      } else if (event instanceof HttpResponse) {
        console.log(event.body)
      }
    });
  }

}
