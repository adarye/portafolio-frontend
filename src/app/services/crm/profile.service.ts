import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia.model';
import { environment } from 'src/environments/environment';

const url = environment.urlApi

@Injectable({
  providedIn: 'root'
})


export class ProfileService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Preferencia>(`${url}preferences`);
  }
}
