import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import firebase from "firebase/compat";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister?: FormGroup;
  success = "";

  constructor(private authService: AuthService,
              private route: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        'password': new FormControl('', [Validators.required,Validators.pattern("[A-Za-z0-9]{6,32}")]),
        'confirm_password': new FormControl('', [Validators.required])
      }, this.comparePW),
      'phone': new FormControl(null,  [Validators.pattern("[0-9]{9,13}"),Validators.required]),
    })
  }


  comparePW(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirm_password) ? null : {
      pwnotmatch: true
    }
  }
  registerCustomer() {
    let value = this.formRegister?.value
    let data={
      'name': value.name,
      'email': value.email,
      'phone': value.phone,
      'password': value.pwGroup.password,
    }
    this.authService.createCustomer(data).subscribe(res => {
      if (res.status=="success"){
        this.toastr.success(res.message, 'Success');
        // this.route.navigate(['']);
      }else {
        this.toastr.error(res.message, 'Error');
      }
    })
  }

}
