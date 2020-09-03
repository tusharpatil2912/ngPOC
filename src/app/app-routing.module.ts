import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from "./user/user-login/user-login.component";
import { RegisterUserComponent } from "./user/register-user/register-user.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { TLDashboardComponent } from "./teamlead/tldashboard/tldashboard.component";

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'userlogin', component: UserLoginComponent},
  {path:'register', component: RegisterUserComponent},
  {path:'user/dashboard', component: UserDashboardComponent},
  {path:'teamlead/dashboard', component: TLDashboardComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
