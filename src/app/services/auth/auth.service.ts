import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  login(user) {
    const urlLogin = url + 'tokens/create'
    this.http.post(urlLogin, user, { responseType: 'text' }).subscribe(res => {
      localStorage.setItem('token', res);
      this.router.navigate(['/crm']);
    })
  }
  async validateUserToken() {
    const token = localStorage.getItem('token');
    let res = await this.http.get(`${url}verify-token/${token}`);
    return res;

  }
  observableToken() {
    const token = localStorage.getItem('token');
  return  this.http.get(`${url}verify-token/${token}`);

  }
}
