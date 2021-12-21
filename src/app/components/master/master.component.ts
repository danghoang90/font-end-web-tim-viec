import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {environment} from "../../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  posts: any;
  userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  formApplyNow?: FormGroup;

  constructor(private toatr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPost()
    this.formApplyNow = new FormGroup({
      "customer_id": new FormControl(this.userLogin.id),
      "employer_id": new FormControl(),
      "post_id": new FormControl(),
    })
  }

  getAllPost(){
    let token = localStorage.getItem('token')
    // console.log(token)
    axios.get(
      environment.API_URL +'list-post',
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.posts = res.data.data
      console.log(res.data)
    });
  }

  submitFormApplyNow(i:number){
    let data = this.formApplyNow?.value
    data.post_id=this.posts[i].id;
    data.employer_id=this.posts[i].employer.id;
    // console.log(data)
    let token = localStorage.getItem('token')
    axios.post(environment.API_URL+"apply-now/create",
      data,
      {headers: {Authorization: `Bearer ${token}`}})
      .then(res=>{
        // console.log(res)
        this.toatr.warning(res.data.message)
      })
  }
}
