import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const AuthRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: {routeName: "login1"} },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

]


@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
