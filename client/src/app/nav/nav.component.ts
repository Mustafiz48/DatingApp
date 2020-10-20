import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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


  constructor(
    public accountService : AccountService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(user){
    this.model.username= user.username;
    this.model.password = user.password;
    console.log(this.model);

    this.accountService.login(this.model).subscribe(

      response =>
      {
        this.router.navigateByUrl('/members');
        this.toastr.success('Logged in Successfully!');
      },
      error=>
      {
        this.toastr.error(error.error);
      }
    );
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
