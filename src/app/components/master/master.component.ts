import {Component, OnInit} from '@angular/core';
import axios from "axios";

import {SearchService} from "../../services/search.service";

import {environment} from "../../../environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  majors1?: any = 'Lập trình viên';
  majors2?: any = 'Tư Vấn Viên';
  majors3?: any = 'Nhân Viên Kinh Doanh';
  majors4?: any = 'Hành Chính Nhân Sự';
  formMajors?: FormGroup
  posts: any;
  userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  formApplyNow?: FormGroup;
  top_employer?:any
  totalLength?: any;
  p?: number = 1;

  constructor(private toatr: ToastrService,
              private searchService: SearchService,
              private router: Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllPost();
    this.topEmployer();
    this.formApplyNow = new FormGroup({
      "customer_id": new FormControl(this.userLogin.id),
      "employer_id": new FormControl(),
      "post_id": new FormControl(),
    })

  }

  getAllPost() {
    let token = localStorage.getItem('token')
    // console.log(token)
    axios.get(
      environment.API_URL + 'list-post',
      {
        headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.posts = res.data.data;
    });
  }

  topEmployer() {
    let token = localStorage.getItem('token')
    axios.get(
      environment.API_URL + 'employers/top-employer',
      {
        headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.top_employer = res.data
      console.log(res)
    });
  }

  submitFormApplyNow(i: number) {
    let data = this.formApplyNow?.value
    data.post_id = this.posts[i].id;
    data.employer_id = this.posts[i].employer.id;
    // console.log(data)
    let token = localStorage.getItem('token')
    axios.post(environment.API_URL + "apply-now/create",
      data,
      {headers: {Authorization: `Bearer ${token}`}})
      .then(res => {
        // console.log(res)
        this.toatr.warning(res.data.message)
      })
  }

  searchMajors(data : any) {
    this.formMajors = this.fb.group({
      'majors': new FormControl(data)
    });
    this.searchService.searchPosts(this.formMajors?.value).subscribe(res=> {
      this.searchService.listJobSearch = res;
      this.router.navigate(['/search']);
    })
  }
}
