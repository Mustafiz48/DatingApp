import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  cancelMode;
  constructor() { }

  ngOnInit(): void {
  }

  registerToggle()
  {
    this.registerMode = ! this.registerMode;
  }
  cancelRegister(val){
    this.registerMode = val;
  }

}
