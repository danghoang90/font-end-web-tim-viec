import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostAddComponent} from "./post-add/post-add.component";
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';
import { EditEmployerComponent } from './employer/edit-employer/edit-employer.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";


const routes: Routes = [
  {
    path:"",
    component: PostAddComponent
  },
  {
    path:"list-post",
    component: PostListComponent
  },
  {
    path:"edit-post/:id",
    component: EditComponent
  },
  {
    path:"edit-employer/:id",
    component: EditEmployerComponent
  }
]

@NgModule({
  declarations: [
    PostAddComponent,
    PostListComponent,
    EditComponent,
    EditEmployerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ]
})
export class PostsModule { }
