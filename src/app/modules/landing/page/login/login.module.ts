import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './login/card/card.component';
import { LandingModule } from '../landing/landing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    LoginComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
