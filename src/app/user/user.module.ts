import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AppRoutingModule } from "../app-routing.module";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';



@NgModule({
  declarations: [UserLoginComponent, RegisterUserComponent, UserDashboardComponent, UserSidebarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class UserModule { }
