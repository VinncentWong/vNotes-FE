import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NotfoundComponent
  ]
})
export class NotfoundModule { }
