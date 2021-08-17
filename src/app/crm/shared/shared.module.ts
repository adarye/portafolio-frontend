import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from '../blog/posts/form/form.component';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, SidebarComponent, NopagefoundComponent, DataTableComponent, FormComponent],
  exports: [HeaderComponent, SidebarComponent, NopagefoundComponent, BreadcrumbsComponent, DataTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
