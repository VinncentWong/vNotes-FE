import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/page/landing/landing.component';
import { LoginComponent } from './modules/landing/page/login/login/login.component';

const routes: Routes = [
  {path: "landingpage", component: LandingComponent},
  {path: '', redirectTo: "/landingpage", pathMatch:"full"},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
