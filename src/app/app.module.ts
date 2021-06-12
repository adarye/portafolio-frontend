import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './crm/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, HttpXsrfTokenExtractor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/httpconfig.interceptors';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ProfileComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN', // this is optional
      headerName: 'X-CSRF-TOKEN' // this is optional
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
