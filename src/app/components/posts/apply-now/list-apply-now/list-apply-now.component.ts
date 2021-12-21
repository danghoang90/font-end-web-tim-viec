import {Component, OnInit} from '@angular/core';
import axios from "axios";
import {environment} from "../../../../../environments/environment";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-apply-now',
  templateUrl: './list-apply-now.component.html',
  styleUrls: ['./list-apply-now.component.css']
})
export class ListApplyNowComponent implements OnInit {
  userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  id = this.userLogin.id;
  apply?: any;

  constructor(private toatr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllApplyNow()
  }

  deleteApplyNow(i:any,id: any) {

    if (confirm("Xóa chứ !!")) {
      let token = localStorage.getItem('token');
      axios.put(
        environment.API_URL + 'apply-now/update/' + id,
        {'status': '2'},
        {
          headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
        this.apply.splice(i,1)
        this.toatr.success(res.data.message)
      });
    }
  }

  getAllApplyNow() {
    let token = localStorage.getItem('token')
    axios.get(
      environment.API_URL + 'apply-now/list/' + this.id,
      {
        headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.apply = res.data.data
      // console.log(res.data.data)
    });
  }
}
