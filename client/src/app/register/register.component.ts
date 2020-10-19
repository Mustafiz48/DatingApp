import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()  public cancelRegister = new EventEmitter();


  model : any ={}
  constructor(private accoutService: AccountService) { }


  ngOnInit(): void {
  }


  register(user : any){

    this.accoutService.register(user).subscribe(

      response =>{
        console.log(response);
        this.cancel();

      },
      error =>{
        console.log(error);
      }


    );
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
