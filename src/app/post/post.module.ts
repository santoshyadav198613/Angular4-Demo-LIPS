
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { PostComponent } from '../post/post.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { PostService } from '../service/post/post.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],

  declarations: [
    PostComponent,
    PostListComponent,
  ],
  providers: [
    PostService
  ]

})
export class PostModule { }
