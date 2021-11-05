 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';





@NgModule({
  declarations: [AboutMeComponent, ResumeComponent, BlogComponent],
  imports: [
    CommonModule, SharedModule, PagesRoutingModule
  ],
  exports:[]
})
export class PagesModule { }
