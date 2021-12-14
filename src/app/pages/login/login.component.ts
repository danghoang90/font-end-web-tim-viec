import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin?: FormGroup;
  errLogin = '';

  constructor(private authService: AuthService,
              private route: Router,
              private toastr: ToastrService) {
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
      console.log(res)
      if(res.status == 'Success'){
        this.toastr.success(res.message, 'Success');
        window.localStorage.setItem('token', res.token)
        localStorage.setItem('userLogin', JSON.stringify(res.data));
        this.route.navigate(['']);
      } else {
        this.toastr.error(res.message, 'Error');
      }
    });
  }
}
