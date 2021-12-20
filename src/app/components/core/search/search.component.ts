import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cities?: any;
  jobs?: any;
  searchFormPost?: FormGroup;
  searchFormEmployer?: FormGroup;

  constructor(private searchService : SearchService,
              private fb:FormBuilder,
              private router: Router) {

    this.getCity();
    this.getJob();


  }

  ngOnInit(): void {
    this.searchFormPost = this.fb.group({
      'title' : new FormControl(null, Validators.required),
      'city_id' : new FormControl(null),
      'job_id' : new FormControl(null)
    });
    this.searchFormEmployer = this.fb.group({
      'name' : new FormControl(null, Validators.required),
    });
  }
  getCity() {
    this.searchService.getAllCity().subscribe(res => {
      this.cities = res;
    });
  }
  getJob() {
    this.searchService.getAllJob().subscribe(res => {
      this.jobs = res;
    });
  }

  searchPosts() {
    console.log(this.searchFormPost?.value);
    this.searchService.searchPosts(this.searchFormPost?.value).subscribe(res => {
      this.searchService.listJobSearch = res;
      this.router.navigate(['/search']);
    });
  }

  searchEmployers(data: any) {
    console.log(data)
    this.searchService.searchEmployers(data).subscribe(res => {
      this.searchService.listEmployerSearch = res;
      this.router.navigate(['/search']);
    });
  }


}
