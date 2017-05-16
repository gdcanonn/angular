import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';

import { LoginService, MenuService, ForgetService, AlertService } from './_services/index';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guard/auth.guard';
import { AlertComponent } from './alert/alert.component';
import { RecoveryComponent } from './recovery/recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuLoginComponent,
    LoginComponent,
    ForgetComponent,
    AlertComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, LoginService, MenuService, ForgetService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
