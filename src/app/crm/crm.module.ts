import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmComponent } from './crm.component';
import { CrmRoutingModule } from './crm.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategoriesComponent } from './blog/categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [CrmComponent, DashboardComponent, AccountSettingsComponent, CategoriesComponent, ProfileComponent],
  imports: [
    CommonModule, CrmRoutingModule, SharedModule, FormsModule, ReactiveFormsModule
  ]
})
export class CrmModule { }
