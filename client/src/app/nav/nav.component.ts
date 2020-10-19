import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {}


  constructor( public accountService : AccountService) { }

  ngOnInit(): void {
  }

  login(user){
    this.model.username= user.username;
    this.model.password = user.password;
    console.log(this.model);

    this.accountService.login(this.model).subscribe(

      response =>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error.error);
      }
    );
  }

  logout(){
    this.accountService.logout();
  }

}
