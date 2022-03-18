import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomComponent } from './bottom/bottom.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
