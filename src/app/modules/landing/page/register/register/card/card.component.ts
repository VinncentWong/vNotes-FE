import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/data/user';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup

  constructor(private readonly http: HttpClient) {
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

  onSubmit(): void{
    console.log("login terpanggil");
    this.http.post<User>("http://localhost:8080/user/login", {
      email: this.formGroup.controls["email"].value,
      password: this.formGroup.controls["password"].value,
    }).subscribe(() => alert("sukses login!"));
    this.formGroup.reset;
  }
}
