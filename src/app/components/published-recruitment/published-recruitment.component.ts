import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-published-recruitment',
  templateUrl: './published-recruitment.component.html',
  styleUrls: ['./published-recruitment.component.css']
})
export class PublishedRecruitmentComponent implements OnInit {
  employer = JSON.parse(<string>localStorage.getItem('userLogin'));
  posts?: any;
  constructor() { }

  ngOnInit(): void {
    this.detailEmployer()
  }

  detailEmployer(){
    let token = localStorage.getItem('token')
    // console.log(token)
    axios.get(
      environment.API_URL +'employers/show/'+this.employer.id,
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.employer = res.data.employer
      this.posts = res.data.posts.length
      console.log(this.posts)
    });
  }

}
