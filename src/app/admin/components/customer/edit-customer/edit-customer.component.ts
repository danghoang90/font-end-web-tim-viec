import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    private router: Router
  ) { }

  id: any = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.customerService.getByIdCustomer(this.id).subscribe(res=>{
      this.customer = res.data;
      console.log(res);
      this.formEditCustomer = this.fb.group({
        name:[this.customer.name],
        email:[this.customer.email],
        phone:[this.customer.phone]
      })
    })
    console.log(this.customer)
  }

  submit(){
    let data = this.formEditCustomer?.value;
    this.customerService.editCustomer(this.id, data).subscribe(res=>{
      this.router.navigate(['/admin/list-customer']);
    })
  }


}
