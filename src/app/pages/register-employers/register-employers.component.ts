import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
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
      pwGroup: new FormGroup({
        'password': new FormControl('', [Validators.required,Validators.pattern("[A-Za-z0-9]{6,32}")]),
        'confirm_password': new FormControl('', [Validators.required])
      }, this.comparePW),
      'contact_person_name': new FormControl(null,Validators.required),
      'phone_number': new FormControl(null,Validators.required),
      'name_employer': new FormControl(null,Validators.required),
      'address_employer': new FormControl(null,Validators.required),
      'city': new FormControl(null,Validators.required),
      'status': new FormControl('2')

    })
  }
  comparePW(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirm_password) ? null : {
      pwnotmatch: true
    }
  }

  registerEmployer(){
    let value = this.formRegisterEmployer?.value
    // console.log(data)
    let data ={
      'email': value.email,
      'password': value.pwGroup.password,
      'contact_person_name': value.contact_person_name,
      'phone_number': value.phone_number,
      'name_employer': value.name_employer,
      'address_employer': value.address_employer,
      'city': value.city,
      'status': value.status
    }

    this.authService.createEmployer(data).subscribe(res =>{
      if (res.status == "success"){
        this.toastr.success(res.message);
        this.route.navigate(['login-employer']);
      } else {
        this.toastr.error(res.message);
      }
    })
  }

}
