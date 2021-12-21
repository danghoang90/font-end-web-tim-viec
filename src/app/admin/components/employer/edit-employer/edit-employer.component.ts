import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployerService} from "../../../../services/employer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.css']
})
export class EditEmployerComponent implements OnInit {
formEditEmployer? : FormGroup;
employer: any;
  constructor(
    private employerService: EmployerService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  id: any = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.employerService.getByIdEmployer(this.id).subscribe(res=>{
      this.employer = res.data;
      this.formEditEmployer = this.fb.group({
        email:[this.employer.email,[Validators.required, Validators.email]],
        contact_person_name:[this.employer.contact_person_name,Validators.required],
        phone_number:[this.employer.phone_number,Validators.required],
        name_employer:[this.employer.name_employer,Validators.required],
        address_employer:[this.employer.address_employer,Validators.required],
        city:[this.employer.city,Validators.required],
        status:[this.employer.status,Validators.required],
        personnel_size:[this.employer.personnel_size],
        company_profile:[this.employer.company_profile],
        logo:[this.employer.logo],
        website:[this.employer.website],

      })
    })
    console.log(this.employer)
  }

  submit(){
    let data = this.formEditEmployer?.value;
    this.employerService.editEmployer(this.id, data).subscribe(res=>{
      console.log(res)
      if (res.status == 'success'){
        this.toastr.success(res.message);
        window.localStorage.setItem('token',res.token);
        localStorage.setItem('edit',JSON.stringify(res.data));
        this.router.navigate(['/admin/list-employer'])
      } else {

        this.toastr.error(res.message);
      }
    })
  }

}
