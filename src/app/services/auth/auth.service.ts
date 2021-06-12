import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { HttpClient } from '@angular/common/http';

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(user) {
    const urlLogin = url + 'tokens/create'
    return this.http.post(urlLogin, user)
  }
}
