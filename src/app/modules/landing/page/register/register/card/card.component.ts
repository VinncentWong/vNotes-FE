import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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
    const formControl: FormControl = this.formGroup.controls["email"] as FormControl;
    if((formControl.hasError("email") || formControl.hasError("required")) && !formControl.pristine && !formControl.untouched ){
      return true;
    } else {
      return false;
    }
  }

  passwordIsInvalid(): boolean{
    const formControl: FormControl = this.formGroup.controls["password"] as FormControl;
    if((formControl.hasError("required") || formControl.hasError("minlength")) && !formControl.pristine && !formControl.untouched ){
      return true;
    } else {
      return false;
    }
  }

  usernameIsInvalid(): boolean{
    const formControl: FormControl = this.formGroup.controls["username"] as FormControl;
    if((formControl.hasError("required") || formControl.hasError("minlength")) && !formControl.pristine && !formControl.untouched){
      return true;
    } else {
      return false;
    }
  }

  onSubmit(form: FormGroupDirective): void{
    console.log("login terpanggil");
    const callApi$ = this.http.post<User>("http://localhost:8080/user/registration", {
      email: this.formGroup.controls["email"].value,
      password: this.formGroup.controls["password"].value,
      username: this.formGroup.controls["username"].value
    });
    callApi$.subscribe((data: User) => {
      alert("sukses registrasi!");
      localStorage.setItem("data", JSON.stringify(data));
      console.log(`data = ${JSON.stringify(data)}`);
    });
    form.resetForm();
  }
}
