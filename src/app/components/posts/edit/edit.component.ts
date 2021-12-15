import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import axios from "axios";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEditpost?: FormGroup
  id: any = this.activatedRoute.snapshot.paramMap.get('id');
  post:any=[];
  constructor( private activatedRoute: ActivatedRoute,
               private route: Router,
               private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.getId()
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      'http://localhost:8000/api/update-post/'+this.id,
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      this.post = res.data.data
      console.log(this.post)
      this.formEditpost = new FormGroup({
        'code': new FormControl("9"),
        'title': new FormControl(this.post.title, Validators.required),
        'salary': new FormControl(this.post.salary, Validators.required),
        'position': new FormControl(this.post.position, Validators.required),
        'experience': new FormControl(this.post.experience, Validators.required),
        'expiration_date': new FormControl(this.post.expiration_date, Validators.required),
        'description': new FormControl(this.post.description, Validators.required),
        'quantity': new FormControl(this.post.quantity, Validators.required),
        'gender': new FormControl(this.post.gender, Validators.required),
        'status': new FormControl('1'),
        'city_id': new FormControl(this.post.city_id, Validators.required),
        'job_id': new FormControl('1'),
      })
    });
  }
  submit(id:any){
    let token = localStorage.getItem('token')
    let data = this.formEditpost?.value
    console.log(data)
    axios.post(
      'http://localhost:8000/api/edit-post/'+id,
      data,
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      if (res.data.status == "success") {
        this.toastr.success(res.data.message, 'Success');
        this.route.navigate(['published-recruitment/list-post']);
      } else {
        this.toastr.error(res.data.message, 'Error');
      }
    });
  }


}
