import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginate } from 'src/app/models/paginate';
import { Skill } from 'src/app/models/skill';
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
  getSkills(page:number = 0){
    return this.http.get<Paginate>(url + 'skills?page=' + page);
  }
  createSkill(obj:Skill) {
return this.http.post(url + 'skills', obj);
  }
  updateSkill(obj:Skill, id:number){
    return this.http.put(url + 'skills/' + id, obj);
  }
  deleteSkill(id:number){
    return this.http.delete(url + 'skills/' + id);
  }
}
