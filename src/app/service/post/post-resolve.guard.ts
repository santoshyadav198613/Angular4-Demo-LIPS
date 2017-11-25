import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Posts } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostResolveGuard implements Resolve<Posts[]> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Posts[]> | Promise<Posts[]> | Posts[] {
    return this.postService.getPost();
  }


}

