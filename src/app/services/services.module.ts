import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  ProfileService,
  AuthService,
  AuthGuard
} from './service.index';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarService } from './crm/snackbar.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [SettingsService,
    ProfileService,
    AuthService,
    SnackbarService,
    AuthGuard]
})
export class ServicesModule { }
