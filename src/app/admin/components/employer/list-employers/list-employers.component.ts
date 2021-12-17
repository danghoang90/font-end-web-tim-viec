import { Component, OnInit } from '@angular/core';
import {EmployerService} from "../../../../services/employer.service";


@Component({
  selector: 'app-list-employers',
  templateUrl: './list-employers.component.html',
  styleUrls: ['./list-employers.component.css']
})
export class ListEmployersComponent implements OnInit {
employers: any;
  constructor(private emlployerService: EmployerService) { }

  ngOnInit(): void {
    this.getAllEmployer();
  }
  getAllEmployer(){
    this.emlployerService.getAllEmployer().subscribe(res=> {
      this.employers = res.data;
      console.log(this.employers);
    })
  }
  deleteEmployer(id: number) {
    if (confirm(`Are you sure?`)) {
      this.emlployerService.destroyCustomer(id).subscribe(res => {
        console.log(res)
        this.getAllEmployer();
      })
    }
  }

}
