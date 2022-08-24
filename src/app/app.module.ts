import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landing/page/landing/landing.component';
import { NavbarComponent } from './modules/landing/page/landing/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LandingcardComponent } from './modules/landing/page/landing/landingcard/landingcard.component';
import { LandingModule } from './modules/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
