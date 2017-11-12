import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http/';
import { Injectable } from '@angular/core';
import { Posts } from './post';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts',
      { headers: new HttpHeaders().set('token', 'kuyf7653fi76i7dg27367ytftf').set('userid', 'jyfda65') }
    );
  }

  addPost(post: Posts) {
    return this.http.post<Posts>('https://jsonplaceholder.typicode.com/posts', post);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true });
    return this.http.request(request);
  }

}
