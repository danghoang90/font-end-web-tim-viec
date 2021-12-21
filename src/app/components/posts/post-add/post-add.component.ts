import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Toast, ToastrService} from "ngx-toastr";
import {PostsService} from "../../../services/posts.service";
import {Router} from "@angular/router";
import axios from "axios";
import {environment} from "../../../../environments/environment";
import {randomInt} from "crypto";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  formPost?: FormGroup

  constructor(private toastr: ToastrService,
              private postsService: PostsService,
              private route: Router) {
  }

  ngOnInit(): void {
    let employer_id = JSON.parse(<string>localStorage.getItem('userLogin'));
    this.formPost = new FormGroup({
      'code': new FormControl(),
      'title': new FormControl(null, Validators.required),
      'majors': new FormControl(null, Validators.required),
      'salary': new FormControl(null, Validators.required),
      'position': new FormControl(null, Validators.required),
      'experience': new FormControl(null, Validators.required),
      'expiration_date': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'status': new FormControl(1),
      'city_id': new FormControl(null, Validators.required),
      'job_type_id': new FormControl(1),
      'employer_id': new FormControl(employer_id.id),
    })
  }

  submit() {
    let data = this.formPost?.value
    const options = {headers: {'Content-Type': 'application/json',}};

    axios.post(environment.API_URL+'create-post', data, options)
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
        if (res.data.status == "success") {
          this.toastr.success(res.data.message, 'Success');
          this.route.navigate(['published-recruitment/list-post']);
        } else {
          this.toastr.error(res.data.message, 'Error');
        }
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      })
  }

}
