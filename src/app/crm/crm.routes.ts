import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategoriesComponent } from './blog/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './blog/posts/posts.component';
import { CategoriesSkillComponent } from './skills/categories-skill/categories-skill.component';
import { SkillComponent } from './skills/skill/skill.component';


const CrmRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
  { path: 'profile', component: ProfileComponent, data: {title: 'Profile'}  },
  { path: 'account-settings', component: AccountSettingsComponent,  data: {title: 'Account Settings'} },
  { path: 'blog/categories', component: CategoriesComponent, data: {title: 'Blog Categories'} },
  { path: 'blog/posts', component: PostsComponent, data: {title: 'Blog Posts'} },
  { path: 'skill/categories', component: CategoriesSkillComponent, data: {title: 'Skill Categories'} },
  { path: 'skills', component: SkillComponent, data: {title: 'Skills'} },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

]


@NgModule({
  imports: [RouterModule.forChild(CrmRoutes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
