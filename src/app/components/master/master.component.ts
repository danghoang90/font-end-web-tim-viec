import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  posts: any;
  userLogin = localStorage.getItem('userLogin');


  constructor() {
  }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    let token = localStorage.getItem('token')
    axios.get(
      'http://localhost:8000/api/list-post',
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.posts = res.data.data
    });
  }
}
