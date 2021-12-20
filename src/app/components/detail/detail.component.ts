import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import axios from "axios";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  condition = !localStorage.getItem('userLogin')
  userLogin: any;
  id: any = this.activatedRoute.snapshot.paramMap.get('id');
  post:any=[];
  constructor(private router: Router,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
    // let employer_id = JSON.parse(<string>localStorage.getItem('userLogin'));
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      'http://localhost:8000/api/update-post/'+this.id,
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.post = res.data.data
      console.log(this.post)
    })
  }

  logout() {
    // this.authService.logout().subscribe(res => {
    // })
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      'http://localhost:8000/api/logout',
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      console.log(res)
    });
    localStorage.removeItem('userLogin')
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
