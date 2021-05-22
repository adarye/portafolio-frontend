import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, PreloaderComponent],
  exports: [HeaderComponent, PreloaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
