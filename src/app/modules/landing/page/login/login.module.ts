import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './login/card/card.component';
import { LandingModule } from '../landing/landing.module';

@NgModule({
  declarations: [
    LoginComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
