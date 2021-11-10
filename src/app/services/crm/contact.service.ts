import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { environment } from 'src/environments/environment';

const urlApi = environment.urlApi;
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  post(obj:Contact){
    return this.http.post(urlApi + 'contacts', obj);
  }
}
