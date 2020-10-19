import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private http : HttpClient, private accountService : AccountService) {}

  users:any;

  ngOnInit(){
    this.getusers();
    this.setCurrentUserUser();
  }

  setCurrentUserUser(){

    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getusers(){
    this.http.get('https://localhost:5001/api/users').subscribe(
      response =>{
        this.users = response;
      },
      error => {
        console.log(error);
      }
    )
  }
}
