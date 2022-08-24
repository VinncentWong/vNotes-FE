import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './page/landing/navbar/navbar.component';
import { LandingComponent } from './page/landing/landing.component';
import { LandingcardComponent } from './page/landing/landingcard/landingcard.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './page/landing/footer/footer.component';
@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    LandingcardComponent,
    FooterComponent
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
