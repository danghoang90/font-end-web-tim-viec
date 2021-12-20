import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./components/master/master.component";
import {LoginComponent} from "./pages/login/login.component";
import {LoginEmployersComponent} from "./pages/login-employers/login-employers.component";
import {RegisterComponent} from "./pages/register/register.component";
import * as path from "path";
import {RegisterEmployersComponent} from "./pages/register-employers/register-employers.component";

import {MasterAdminComponent} from "./admin/layout/master-admin/master-admin.component";

import {PublishedRecruitmentComponent} from "./components/published-recruitment/published-recruitment.component";
import {AuthGuard} from "./auth.guard";
import {DetailComponent} from "./components/detail/detail.component";



const routes: Routes = [
  {
    path: '',
    component: MasterComponent,

  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'login-employer',
    component: LoginEmployersComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'register-employer',
    component: RegisterEmployersComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {

    path: 'admin',
    component: MasterAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]

  },
  {
    path:'published-recruitment',
    component: PublishedRecruitmentComponent,
    children:[
      {
        path:"",
        loadChildren:()=>import('./components/posts/posts.module').then(m => m.PostsModule)
      }
    ],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
