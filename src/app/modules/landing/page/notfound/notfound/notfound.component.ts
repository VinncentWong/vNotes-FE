import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private icon: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.icon.addSvgIcon("404",
    this.
    domSanitizer.
    bypassSecurityTrustResourceUrl("../../../../assets/notfound.svg"));
  }

  ngOnInit(): void {}

}
