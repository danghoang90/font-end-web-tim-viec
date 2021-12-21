import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

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

  searchFormPost?: FormGroup;
  searchFormEmployer?: FormGroup;
  searchPostTitle?: FormGroup;
  constructor(private searchService: SearchService,
              private fb:FormBuilder) {
    this.getCity();
    this.getJob();
    this.searchFormPost = this.fb.group({
      'title' : new FormControl(null),
      'city_id' : new FormControl(null),
      'job_type_id' : new FormControl(null)
    });
    this.searchFormEmployer = this.fb.group({
      'name' : new FormControl(null),
    });
    this.searchPostTitle = this.fb.group({
      'name' : new FormControl(null),
    });
    this.data =this.searchService.listJobSearch;
    console.log(this.data)
    if (this.data.message == 'List post'){
      this.listJob = this.data.data;
      this.count = this.listJob.length;
    }else {
      this.employers = this.searchService.listEmployerSearch;
      this.listEmployer = this.employers.data
      this.count = this.listEmployer.length;
    }
  }

  ngOnInit(): void {




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
    console.log(data)
    this.searchService.searchPosts(data).subscribe(res => {
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

}
