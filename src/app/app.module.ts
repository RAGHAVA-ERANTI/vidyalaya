import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './common/sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { LoginoutComponent } from './loginout/loginout.component';
import { ClinetRegisterComponent } from './clinet-register/clinet-register.component';
import { DashboardComponent } from './setup/dashboard/dashboard.component';
import { BranchDetailsComponent } from './setup/branch-details/branch-details.component';
import { RoleCreationComponent } from './setup/role-creation/role-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
MaterialModule

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent,
    LoginoutComponent,
    ClinetRegisterComponent,
    BranchDetailsComponent,
    RoleCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
