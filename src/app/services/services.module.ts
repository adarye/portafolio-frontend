import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  ProfileService,
  AuthService,
  AuthGuard
} from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SettingsService,
    ProfileService,
    AuthService,
    AuthGuard]
})
export class ServicesModule { }
