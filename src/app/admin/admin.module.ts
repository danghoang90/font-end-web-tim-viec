import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCustomerComponent} from "./components/customer/list-customers/list-customer.component";
import {EditCustomerComponent} from "./components/customer/edit-customer/edit-customer.component";
import {ListEmployersComponent} from "./components/employer/list-employers/list-employers.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditEmployerComponent} from "./components/employer/edit-employer/edit-employer.component";
import {DashboardComponent} from "./layout/core/dashboard/dashboard.component";
import {NgxPaginationModule} from "ngx-pagination";



const routes: Routes = [


  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "list-customer",
    component: ListCustomerComponent
  },
  {
    path: ":id/edit-customer",
    component: EditCustomerComponent
  },
  {
    path: "list-employer",
    component: ListEmployersComponent
  },
  {
    path: ":id/edit-employer",
    component: EditEmployerComponent
  }

]


@NgModule({
  declarations: [
    ListCustomerComponent,
    ListEmployersComponent,
    EditCustomerComponent,
    EditEmployerComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ]
})
export class AdminModule { }
