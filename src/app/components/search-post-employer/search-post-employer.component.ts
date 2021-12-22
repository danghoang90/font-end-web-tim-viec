import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import axios from "axios";
import {environment} from "../../../environments/environment";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-search-post-employer',
  templateUrl: './search-post-employer.component.html',
  styleUrls: ['./search-post-employer.component.css']
})
export class SearchPostEmployerComponent implements OnInit {
  public data?:any =[];
  public employers?:any;
  count?: any =0;
  userLogin = localStorage.getItem('userLogin');
  cities?: any;
  jobType?: any;
  listJob?: any;
  listEmployer?: any;
  formApplyNow?: FormGroup;
  userLogin1 = JSON.parse(<string>localStorage.getItem('userLogin'));
  applyNow?: any = 'Ứng Tuyển Ngay';
  totalLength?: any;
  p?: number = 1;
  formMajors?: FormGroup
  majors1?: any = 'Lập trình viên';
  majors2?: any = 'Tư Vấn Viên';
  majors3?: any = 'Nhân Viên Kinh Doanh';
  majors4?: any = 'Hành Chính Nhân Sự';

  searchFormPost?: FormGroup;
  searchFormEmployer?: FormGroup;
  constructor(private searchService: SearchService,
              private fb:FormBuilder,
              private toatr: ToastrService) {
    this.getCity();
    this.getJob();
    this.searchFormPost = this.fb.group({
      'title' : new FormControl(null),
      'city_id' : new FormControl(null),
      'job_type_id' : new FormControl(null)
    });
    this.data =this.searchService.listJobSearch;
    if (this.data.message == 'List post'){
      this.listJob = this.data.data;
      this.count = this.listJob.length;
    }else {
      this.employers = this.searchService.listEmployerSearch;
      this.listEmployer = this.employers.data
      this.count = this.listEmployer.length;
    }
  }

  ngOnInit() {
    this.formApplyNow = new FormGroup({
      "customer_id": new FormControl(this.userLogin1.id),
      "employer_id": new FormControl(),
      "post_id": new FormControl(),
    });
    this.searchFormEmployer = this.fb.group({
      'name' : new FormControl(null),
    });


  }

  getCity() {
    this.searchService.getAllCity().subscribe(res => {
      this.cities = res;
    });
  }
  getJob() {
    this.searchService.getAllJob().subscribe(res => {
      this.jobType = res;
    });
  }

  searchPosts(data: any) {
    this.searchService.searchPosts(data).subscribe(res => {
      console.log(res)
      this.listJob = res.data;
      this.listEmployer = null;
      this.count = this.listJob.length;
    });
  }

  searchEmployers(data: any) {
    this.searchService.searchEmployers(data).subscribe(res => {
      this.listEmployer = res.data;
      this.listJob = null;
      this.count = this.listEmployer.length;
    });
  }

  searchPostTitle(data:any) {
    this.searchService.searchPosts(data).subscribe(res => {
      console.log(res);
      this.listJob = res.data;
      this.listEmployer = null;
      this.count = this.listJob.length;
    });
  }

  submitFormApplyNow(i:number){
    let data = this.formApplyNow?.value;
    data.post_id=this.listJob[i].id;
    data.employer_id=this.listJob[i].employer.id;

    let token = localStorage.getItem('token')
    axios.post(environment.API_URL+"apply-now/create",
      data,
      {headers: {Authorization: `Bearer ${token}`}})
      .then(res=>{
        // console.log(res)
        this.toatr.warning(res.data.message)
      });

  }
  searchMajors(data : any) {
    this.formMajors = this.fb.group({
      'majors': new FormControl(data)
    });
    this.searchService.searchPosts(this.formMajors?.value).subscribe(res => {
      this.listJob= res.data;
      this.count = this.listJob.length;
    })
  }
}
