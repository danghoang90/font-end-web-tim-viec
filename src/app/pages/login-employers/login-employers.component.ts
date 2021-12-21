import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login-employers',
  templateUrl: './login-employers.component.html',
  styleUrls: ['./login-employers.component.css']
})
export class LoginEmployersComponent implements OnInit {
  formLoginEmployer?: FormGroup
  constructor(private authService: AuthService,
              private route: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.formLoginEmployer = new FormGroup({
      'email': new FormControl(null,[Validators.email]),
      'password': new FormControl(null,Validators.required),
    })
  }
  loginEmployer() {
    let data = this.formLoginEmployer?.value;
    this.authService.checkEmployerAccount(data).subscribe(res => {
      console.log(res)
      if(res.status == 'Success'){
        this.toastr.success(res.message);
        localStorage.setItem('token', res.token)
        localStorage.setItem('userLogin', JSON.stringify(res.data));
        this.route.navigate(['published-recruitment']);
      } else {
        this.toastr.error(res.message);
      }
    });
  }



}
