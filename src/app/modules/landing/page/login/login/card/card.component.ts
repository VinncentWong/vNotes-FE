import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl("", {
        validators: [
          Validators.required, Validators.email
        ]
      })
    });
  }

  ngOnInit(): void {

  }

  emailValidation(): boolean{
    console.log("email validation terpanggil");
    if(this.formGroup.controls["email"].invalid){
      return false;
    } else {
      return true;
    }
  }

}
