import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup;
  emailColor: string = "accent";
  passwordColor: string = "accent";

  constructor(private icon: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.formGroup = new FormGroup({
      email: new FormControl("", {
        validators: [
          Validators.required, Validators.email
        ],
        updateOn: "change"
      }),
      password: new FormControl("", {
        validators: [
          Validators.required
        ],
        updateOn: "change"
      })
    });
    icon.addSvgIcon("google", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../../../../assets/google-svgrepo-com.svg"));
  }

  ngOnInit(): void {}

  emailValidation(): boolean{
   if(this.formGroup.controls["email"].invalid){
    return false;
   } else {
    return true;
   }
  }

  passwordValidation(): boolean{
    if(this.formGroup.controls["password"].invalid){
      return false;
     } else {
      return true;
     }
  }
}
