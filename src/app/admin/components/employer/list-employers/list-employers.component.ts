import { Component, OnInit } from '@angular/core';
import {EmployerService} from "../../../../services/employer.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-employers',
  templateUrl: './list-employers.component.html',
  styleUrls: ['./list-employers.component.css']
})
export class ListEmployersComponent implements OnInit {
employers: any;
  count: any;
  status:any;
  totalLength?: any;
  p?: number = 1;
  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.getAllEmployer();
  }
  getAllEmployer(){
    this.employerService.getAllEmployer().subscribe(res=> {
      this.employers = res.data;
      this.status = this.employers.status;
      this.count = this.employers.length;
      console.log(this.status);
      this.totalLength = res.length;
    })
  }
  deleteEmployer(id: number) {

      this.employerService.destroyCustomer(id).subscribe(res => {
        console.log(res)
        this.getAllEmployer();
      })

  }

  confirmBoxEmp(id:any){
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa không ?',
      text: 'Bạn sẽ không thể khôi phục tệp này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý xóa!',
      cancelButtonText: 'không xóa'
    }).then((result) => {
      if (result.value) {
        this.employerService.destroyCustomer(id).subscribe(res => {
          console.log(res)
          this.getAllEmployer();
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
