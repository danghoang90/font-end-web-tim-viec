import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
formEditCustomer? : FormGroup;
customer: any;
  constructor(
    private customerService: CustomerService,
    private activatedRoute:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  id: any = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.customerService.getByIdCustomer(this.id).subscribe(res=>{
      this.customer = res.data;
      console.log(res);
      this.formEditCustomer = this.fb.group({
        name:[this.customer.name,Validators.required],
        email:[this.customer.email,[Validators.required, Validators.email]],
        phone:[this.customer.phone,[Validators.pattern("[0-9]{9,13}"),Validators.required]]
      })
    })
    console.log(this.customer)
  }

  submit(){
    let data = this.formEditCustomer?.value;
    this.customerService.editCustomer(this.id, data).subscribe(res=>{
      console.log(res)
      if (res.status == 'success'){
        this.toastr.success(res.message);
        window.localStorage.setItem('token',res.token);
        localStorage.setItem('edit',JSON.stringify(res.data));
        this.router.navigate(['/admin/list-customer'])
      } else {

        this.toastr.error(res.message);
      }
    })
  }


}
