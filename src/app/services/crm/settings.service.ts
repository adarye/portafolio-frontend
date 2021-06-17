import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { HttpClient } from '@angular/common/http';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor(private http:HttpClient) {

    const url = localStorage.getItem('theme') || '../../../assets/plugin-crm/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', url);

  }

  changeTheme( theme: string ) {
    const url = `../../../assets/plugin-crm/css/colors/${ theme }.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url );

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `../../../assets/plugin-crm/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }

    });

  }
 csrfCookie(){
   return this.http.get(`${url}sanctum/csrf-cookie`, { responseType: 'text' }
 );
 }
}
