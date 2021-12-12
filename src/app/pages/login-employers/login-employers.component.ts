import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-employers',
  templateUrl: './login-employers.component.html',
  styleUrls: ['./login-employers.component.css']
})
export class LoginEmployersComponent implements OnInit {
  formLoginEmployers?: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formLoginEmployers = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
    })
  }

  submit(){

  }

}
