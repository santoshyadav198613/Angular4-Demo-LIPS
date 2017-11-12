
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'
import { PostComponent } from '../post/post.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { PostService } from '../service/post/post.service';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'post', component: PostComponent },
      { path: 'post/:id', component: PostDetailsComponent }
    ])
  ],

  declarations: [
    PostComponent,
    PostListComponent,
    PostDetailsComponent,
  ],
  providers: [
    PostService
  ]

})
export class PostModule { }
