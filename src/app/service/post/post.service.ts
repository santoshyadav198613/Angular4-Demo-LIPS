import { HttpClient } from '@angular/common/http/';
import { Injectable } from '@angular/core';
import{Posts}from'./post'


@Injectable()
export class PostService {

  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<Posts[]>('http://jsonplaceholder.typicode.com/posts');
  }

}
