import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostAddComponent} from "./post-add/post-add.component";
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';


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
  }
]

@NgModule({
  declarations: [
    PostAddComponent,
    PostListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PostsModule { }
