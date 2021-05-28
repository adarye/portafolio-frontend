import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmComponent } from './crm.component';
import { CrmRoutingModule } from './crm.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [CrmComponent, DashboardComponent, AccountSettingsComponent],
  imports: [
    CommonModule, CrmRoutingModule, SharedModule
  ]
})
export class CrmModule { }
