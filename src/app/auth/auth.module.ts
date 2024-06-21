import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserMenuComponent, ProfileComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  exports: [UserMenuComponent],
})
export class AuthModule {}
