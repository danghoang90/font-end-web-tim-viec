import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployerService} from "../../../../services/employer.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    private router: Router
  ) { }

  id: any = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.employerService.getByIdEmployer(this.id).subscribe(res=>{
      this.employer = res;
      this.formEditEmployer = this.fb.group({
        email:[this.employer.email],
        contact_person_name:[this.employer.contact_person_name],
        phone_number:[this.employer.phone_number],
        name_employer:[this.employer.name_employer],
        address_employer:[this.employer.address_employer],
        city:[this.employer.city]
      })
    })
    console.log(this.employer)
  }

  submit(){
    let data = this.formEditEmployer?.value;
    this.employerService.editEmployer(this.id, data).subscribe(res=>{
      this.router.navigate(['']);
    })
  }

}
