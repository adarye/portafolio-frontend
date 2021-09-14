import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillCategory } from 'src/app/models/skill-category';
import { environment } from 'src/environments/environment';

const url = environment.urlApi

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }
  getCategories(page: number = 0) {
    return this.http.get(url + `skill-categories?page=${page}`);
  }
  createCategory(obj:SkillCategory) {
    return this.http.post(url + 'skill-categories', obj);
  }
}
