import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './setup/dashboard/dashboard.component';
import { BranchDetailsComponent } from './setup/branch-details/branch-details.component';
import { RoleCreationComponent } from './setup/role-creation/role-creation.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: SidenavComponent,
    canActivate: [ AuthGuardService ],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'branchdetails',
        component: BranchDetailsComponent
      },
      {
        path: 'rolecreation',
        component: RoleCreationComponent
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
