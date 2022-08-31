import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user?: User;

  constructor(private httpClient: HttpClient) {
    const userStorage = JSON.parse(localStorage.getItem("user") ?? "");
    const id = userStorage["id"];
    const jwtToken = userStorage["jwtToken"];
    const apiCall$ = httpClient.get<User>(`http://localhost:8080/getuser/${id}`, {
      headers: {
        "Authorization": "Bearer " + jwtToken
      }
    });
    apiCall$.subscribe((data: User) => {
      this.user = data;
    });
  }

  ngOnInit(): void {}

}
