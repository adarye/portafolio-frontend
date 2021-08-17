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
import { PostsComponent } from './blog/posts/posts.component';
// import { FormComponent } from './blog/posts/form/form.component';



@NgModule({
  declarations: [CrmComponent, DashboardComponent, AccountSettingsComponent, CategoriesComponent, ProfileComponent,  PostsComponent],
  imports: [
    CommonModule, CrmRoutingModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  entryComponents: [],
})
export class CrmModule { }
