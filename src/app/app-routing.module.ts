
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
