import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl("", {
        validators: [
          Validators.required, Validators.email
        ]
      }),
      password: new FormControl("", {
        validators: [
          Validators.minLength(6), Validators.required
        ]
      }),
      username: new FormControl("", {
        validators: [
          Validators.required, Validators.minLength(5)
        ]
      })
    });
  }

  ngOnInit(): void {}

  submitDisabled(): boolean{
    if(this.formGroup.invalid){
      return true;
    } else {
      return false;
    }
  }

  emailIsInvalid(): boolean{
    if(this.formGroup.controls["email"].invalid){
      return true;
    } else {
      return false;
    }
  }

  passwordIsInvalid(): boolean{
    if(this.formGroup.controls["password"].invalid){
      return true;
    } else {
      return false;
    }
  }

  usernameIsInvalid(): boolean{
    if(this.formGroup.controls["username"].invalid){
      return true;
    } else {
      return false;
    }
  }
}
