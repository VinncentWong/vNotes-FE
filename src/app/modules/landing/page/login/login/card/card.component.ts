import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/data/user';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  formGroup: FormGroup;
  emailColor: string = "accent";
  passwordColor: string = "accent";

  constructor(private https: HttpClient, private route: Router) {
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
    if(this.formGroup.controls["password"].invalid){
      return false;
     } else {
      return true;
     }
  }

  disableButton(): boolean{
    if(this.formGroup.invalid){
      return true;
    } else {
      return false;
    }
  }

  onSubmit(form: FormGroupDirective): void{
    const callApi$ = this.https.post<User>("http://localhost:8080/user/login", {
      email: this.formGroup.controls["email"].value,
      password: this.formGroup.controls["password"].value,
    });
    callApi$.subscribe((data: User) => {
      localStorage.setItem("data", JSON.stringify(data));
      alert("user sukses login");
    });
    form.resetForm();
    this.route.navigate(["/home"]);
  }
}
