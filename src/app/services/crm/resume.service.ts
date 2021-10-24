import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeCategory } from 'src/app/models/resume-category';
import { environment } from 'src/environments/environment';import { Resume } from 'src/app/models/resume';

const url = environment.urlApi

@Injectable({
  providedIn: 'root'
})


export class ResumeService {

  constructor(private http:HttpClient) { }

  getCategories(page:number = 1){
    return this.http.get(url + `resume-categories?page=${page}`);
  }

  createCategory(obj:ResumeCategory){
    return this.http.post(url + 'resume-categories', obj);
  }

  getResumes(page:number){
     return this.http.get(url + `resumes?page=${page}`);
  }
  deleteResume(id:number){
    return this.http.delete(url + `resumes/${id}`);
  }
  updateResume(obj:Resume, id:number){
    return this.http.put(url +  `resumes/${id}`, obj);
  }
  createResume(obj:Resume){
    return this.http.post(url + `resumes`, obj)
  }

}
