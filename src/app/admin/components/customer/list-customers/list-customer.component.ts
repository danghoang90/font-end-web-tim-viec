import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customers: any;
  id: any = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAllCustomer().subscribe(res=>{
        this.customers = res.data;
        console.log(this.customers);
      })
  }
  deleteCustomer(id: number) {
    if (confirm(`Are you sure?`)) {
      this.customerService.destroyCustomer(id).subscribe(res => {
        console.log(res)
       this.getAllCustomer();
      })
    }
  }

}
