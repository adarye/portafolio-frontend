import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const CrmRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

]


@NgModule({
  imports: [RouterModule.forChild(CrmRoutes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
