import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup;
  emailColor: string = "accent";
  passwordColor: string = "accent";

  constructor() {
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
    if(this.formGroup.controls["email"].invalid){
      return false;
     } else {
      return true;
     }
  }
}
