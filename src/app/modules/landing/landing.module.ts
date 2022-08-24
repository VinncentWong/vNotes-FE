import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './page/landing/navbar/navbar.component';
import { LandingComponent } from './page/landing/landing.component';
import { LandingcardComponent } from './page/landing/landingcard/landingcard.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    LandingcardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    LandingComponent,
    LandingcardComponent
  ]
})
export class LandingModule { }
