import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";




@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customers: any;
count:any;
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
        this.count = this.customers.length;
        console.log(this.customers);
      })
  }
  deleteCustomer(id: number) {

      this.customerService.destroyCustomer(id).subscribe(res => {
        console.log(res)
       this.getAllCustomer();
      })

  }
  confirmBox(id:any){
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa không ?',
      text: 'Bạn sẽ không thể khôi phục tệp này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý xóa!',
      cancelButtonText: 'không xóa'
    }).then((result) => {
      if (result.value) {
        this.customerService.destroyCustomer(id).subscribe(res => {
          console.log(res)
          this.getAllCustomer();
        })
        Swal.fire(
          'Đã xóa !',
          'Tệp bạn chọn đã được xóa !.',

          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Đã hủy',
          'Tệp vẫn được giữ nguyên vẹn :)',
          'error'
        )
      }
    })
  }


}
