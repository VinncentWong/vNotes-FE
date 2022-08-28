import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LandingModule } from '../landing/landing.module';
import { CardComponent } from './register/card/card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    RegisterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    LandingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
