import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register-employers',
  templateUrl: './register-employers.component.html',
  styleUrls: ['./register-employers.component.css']
})
export class RegisterEmployersComponent implements OnInit {
formRegisterEmployer?: FormGroup;

  constructor(private authService: AuthService,
              private route:Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formRegisterEmployer = new FormGroup({
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null,[Validators.pattern("[A-Za-z0-9]{6,32}"),Validators.required]),
      'confirm-password': new FormControl(null,Validators.required),
      'contact-person-name': new FormControl(null,Validators.required),
      'phone-number': new FormControl(null,Validators.required),
      'name-employer': new FormControl(null,Validators.required),
      'address-employer': new FormControl(null,Validators.required),
      'city': new FormControl(null,Validators.required),

    })
  }

  registerEmployer(){
    let data = this.formRegisterEmployer?.value
    console.log(data)
    this.authService.createEmployer(data).subscribe(res =>{
      if (res.status == "success"){
        this.toastr.success(res.message,'Success');
      } else {
        this.toastr.error(res.message, 'Error');
      }
    })
  }

}
