import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing.component';
import { LandingcardComponent } from './landingcard/landingcard.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    LandingcardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    LandingComponent,
    LandingcardComponent,
    FooterComponent
  ]
})
export class LandingModule { }
