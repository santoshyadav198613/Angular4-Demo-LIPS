import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../service/post/post';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post/post.service';
import { MatDialog } from '@angular/material';
import { PostEditComponent } from '../post-edit/post-edit.component'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Posts[];
  userid: number=0;
  constructor(private postService: PostService, private route: ActivatedRoute,
    public dialog: MatDialog) { }

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

  edit(post: Posts) {
    let dialogRef = this.dialog.open(PostEditComponent, {
      data: post
    });
  }

}
