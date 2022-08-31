import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/landing/page/home/home.component';
import { LandingComponent } from './modules/landing/page/landing/landing.component';
import { LoginComponent } from './modules/landing/page/login/login/login.component';
import { NotfoundComponent } from './modules/landing/page/notfound/notfound/notfound.component';
import { RegisterComponent } from './modules/landing/page/register/register/register.component';

const routes: Routes = [
  {path: "landingpage", component: LandingComponent, title: "Landing Page"},
  {path: '', redirectTo: "/landingpage", pathMatch:"full"},
  {path: "login", component: LoginComponent, title: "Login Page"},
  {path: "register", component: RegisterComponent, title: "Registration Page"},
  {path: "home", component: HomeComponent, title: "Home Page"},
  {path: "home/login/oauth2/code/google", redirectTo: "/home"},
  {path: "**", component: NotfoundComponent, title: "404 Page Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
