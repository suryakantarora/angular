import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthGuardService } from './services/auth-guard.service';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren:() => import('./pages/dashboard/dashboard.module').then(()=> DashboardModule)
   }, { path: 'login', component: LoginComponent },
  { path: 'start', component: StartComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
