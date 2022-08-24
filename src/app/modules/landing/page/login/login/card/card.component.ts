import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup;
  emailColor: string = "primary";
  passwordColor: string = "primary";

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
    console.log("email validation terpanggil");
    console.log(`email tidak valid = ${this.formGroup.controls["email"].invalid}`);
    if(this.formGroup.controls["email"].invalid){
      this.emailColor = "warn";
      return false;
    } else {
      this.emailColor = "accent";
      return true;
    }
  }

  passwordValidation(): boolean{
    if(this.formGroup.controls["password"].pristine){
      this.passwordColor = "warn";
      return false;
    } else {
      this.emailColor = "accent";
      return true;
    }
  }
}
