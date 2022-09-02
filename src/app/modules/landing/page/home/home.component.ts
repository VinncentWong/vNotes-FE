import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private httpClient: HttpClient) {
    this.user = new User();
    const userStorage = JSON.parse(localStorage.getItem("data") ?? "");
    console.log("user storage = " + localStorage.getItem("data"));
    this.user.username = userStorage.data.username;
  }

  ngOnInit(): void {}

}
