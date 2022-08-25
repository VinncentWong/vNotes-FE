import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup;
  emailColor?: string;
  passwordColor?: string;

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

  ngOnInit(): void {
    console.log("on init terpanggil");
  }

  emailValidation(){
    console.log("email validation terpanggil");
    console.log(`email tidak valid = ${this.formGroup.controls["email"].invalid}`);
    if(this.formGroup.controls["email"].invalid){
      this.emailColor = "warn";
      return false;
    } else if(this.formGroup.controls["email"].pristine){
      this.passwordColor = "primary";
      return true;
    } else {
      this.emailColor = "accent";
      return true;
    }
}

  passwordValidation(): boolean{
    console.log("password validaiton terpanggil");
    if(this.formGroup.controls["password"].invalid){
      this.passwordColor = "warn";
      return false;
    } else if(this.formGroup.controls["password"].pristine){
      this.passwordColor = "primary";
      return true;
    } else {
      console.log("password valid");
      this.passwordColor = "accent";
      return true;
    }
  }
}
