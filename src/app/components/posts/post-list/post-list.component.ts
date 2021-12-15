import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../services/posts.service";
import axios from "axios";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any;
  userLogin = localStorage.getItem('userLogin')

  constructor(private postService: PostsService) { }


  ngOnInit(): void {
    this.getAllPost()
  }
  getAllPost(){
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      'http://localhost:8000/api/list-post',
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
        this.posts = res.data.data
      console.log(res.data)
    });
  }
}
