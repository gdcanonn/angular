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

import { LoginService, MenuService } from './_services/index';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuLoginComponent,
    LoginComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, LoginService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
