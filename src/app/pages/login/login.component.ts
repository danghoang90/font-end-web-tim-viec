import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin?: FormGroup;
  errLogin = '';

  constructor(private authService: AuthService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, Validators.required)
    })
  }

  login() {
    let data = this.formLogin?.value;
    this.authService.checkAccount(data).subscribe(res => {
      if(res.status == 'Success'){
        this.errLogin = 'ok';
        this.route.navigate(['']);
      }
    });
    this.errLogin = 'Email hoặc mật khẩu không chính xác !';
  }
}
