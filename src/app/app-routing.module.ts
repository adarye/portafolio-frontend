
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CrmComponent } from './crm/crm.component';

import { PagesComponent } from './pages/pages.component';


const routes: Routes = [

  {
    path: 'cv',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'crm',
    component: CrmComponent,
    loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule)
  },
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
