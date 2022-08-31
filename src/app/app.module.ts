import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './modules/landing/page/landing/landing.module';
import { LoginModule } from './modules/landing/page/login/login.module';
import { RegisterModule } from './modules/landing/page/register/register.module';
import { NotfoundModule } from './modules/landing/page/notfound/notfound.module';
import { HomeModule } from './modules/landing/page/home/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    LoginModule,
    RegisterModule,
    NotfoundModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
