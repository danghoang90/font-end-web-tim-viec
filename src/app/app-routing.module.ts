import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./components/master/master.component";
import {LoginComponent} from "./pages/login/login.component";
import {LoginEmployersComponent} from "./pages/login-employers/login-employers.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'login-employers',
    component: LoginEmployersComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
