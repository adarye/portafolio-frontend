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
import { CategoriesSkillComponent } from './skills/categories-skill/categories-skill.component';
import { SkillComponent } from './skills/skill/skill.component';
import { FormComponent as FormComponentResume } from './resume/experience/form/form.component'
import { FormComponent as FormComponentSkill } from './skills/skill/form/form.component'
import { CategoriesResumeComponent } from './resume/categories-resume/categories-resume.component';
import { ExperienceComponent } from './resume/experience/experience.component';
 import { FormComponent as FormComponentPost } from './blog/posts/form/form.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { FormComponent as FormComponentFacts } from './fun-facts/form/form.component';



@NgModule({
  declarations: [CrmComponent, DashboardComponent, AccountSettingsComponent, CategoriesComponent, ProfileComponent,  PostsComponent, CategoriesSkillComponent, SkillComponent, CategoriesResumeComponent, ExperienceComponent, FormComponentSkill, FormComponentResume, FormComponentPost, FunFactsComponent, FormComponentFacts],
  imports: [
    CommonModule, CrmRoutingModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  entryComponents: [],
})
export class CrmModule { }
