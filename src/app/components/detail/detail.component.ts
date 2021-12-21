import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import axios from "axios";
import {environment} from "../../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

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
  formApplyNow?: FormGroup;
  constructor(private router: Router,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private toatr: ToastrService) {
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
    // let employer_id = JSON.parse(<string>localStorage.getItem('userLogin'));
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      environment.API_URL +'update-post/'+this.id,
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.post = res.data.data
      console.log(this.post)
    })
    this.formApplyNow = new FormGroup({
      "customer_id": new FormControl(this.userLogin.id),
      "employer_id": new FormControl(),
      "post_id": new FormControl(),
    })
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

  submitFormApplyNow(){
    let data = this.formApplyNow?.value
    data.post_id=this.id;
    data.employer_id=this.post.employer.id;
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
