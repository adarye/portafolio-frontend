import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/httpconfig.interceptors';
import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
