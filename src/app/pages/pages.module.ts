import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';





@NgModule({
  declarations: [AboutMeComponent, ResumeComponent, BlogComponent, ContactComponent, PostComponent],
  imports: [
    CommonModule, SharedModule, PagesRoutingModule, FormsModule
  ],
  exports:[]
})
export class PagesModule { }
