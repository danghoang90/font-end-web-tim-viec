import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import axios from "axios";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.css']
})
export class DetailEmployerComponent implements OnInit {
  condition = !localStorage.getItem('userLogin')
  userLogin: any;
  id: any = this.activatedRoute.snapshot.paramMap.get('id');
  posts :any[] = [];
  employer:any;
  constructor(private router: Router,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailEmployer()
  }


  logout() {
    // this.authService.logout().subscribe(res => {
    // })
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      environment.API_URL +'/logout',
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      console.log(res)
    });
    localStorage.removeItem('userLogin')
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }


  detailEmployer(){
    let token = localStorage.getItem('token')
    // console.log(token)
    axios.get(
      environment.API_URL +'employers/show/'+this.id,
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.employer = res.data.employer
      this.posts = res.data.posts
      console.log(res.data.posts[0])
    });
  }
}
