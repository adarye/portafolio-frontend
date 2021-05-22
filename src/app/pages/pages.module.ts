import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';





@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule, PagesRoutingModule
  ],
  exports:[]
})
export class PagesModule { }
