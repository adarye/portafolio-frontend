import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginate } from 'src/app/models/paginate';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';
import { BlogCategory } from '../../models/blog-category';

const url = environment.urlApi

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {

  }
  getCategories(page: number = 0) {
    return this.http.get<Paginate>(url + `posts-categories?page=${page}`);
  }
  createCategory(obj: BlogCategory) {
    return this.http.post(url + 'posts-categories', obj);
  }

  getPosts(page: number) {
    return this.http.get<Paginate>(url + `posts?page=${page}`);
  }
  createPost(obj: Post) {
    return this.http.post(url + `posts`, obj);
  }
  updatePost(id: number, obj: Post) {
    return this.http.put(url + `posts/${id}`, obj);
  }
  deletePost(id: number) {
    return this.http.delete(url + `posts/${id}`);
  }
  showPost(id: number) {
    return this.http.get<Post>(url + `posts/${id}`);
  }
}
