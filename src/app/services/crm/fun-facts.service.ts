import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FunFact } from 'src/app/models/fun-facts';
import { environment } from 'src/environments/environment';

const url = environment.urlApi
@Injectable({
  providedIn: 'root'
})
export class FunFactsService {

  constructor(private http:HttpClient) { }

  get(page:number){
    return this.http.get(url + `fun-facts?page=${page}`);
 }
 delete(id:number){
   return this.http.delete(url + `fun-facts/${id}`);
 }
 update(obj:FunFact, id:number){
   return this.http.put(url +  `fun-facts/${id}`, obj);
 }
 create(obj:FunFact){
   return this.http.post(url + `fun-facts`, obj)
 }
}
