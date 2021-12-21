import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MasterComponent} from './components/master/master.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginEmployersComponent} from './pages/login-employers/login-employers.component';
import {RegisterComponent} from './pages/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

import { RegisterEmployersComponent } from './pages/register-employers/register-employers.component';
import { NavbarComponent } from './admin/layout/core/navbar/navbar.component';
import { SitebarComponent } from './admin/layout/core/sitebar/sitebar.component';
import { FooterComponent } from './admin/layout/core/footer/footer.component';
import { MasterAdminComponent } from './admin/layout/master-admin/master-admin.component';
import { DashboardComponent } from './admin/layout/core/dashboard/dashboard.component';
import {NavComponent} from './components/core/nav/nav.component';
import {BannerComponent} from './components/core/banner/banner.component';
import {SearchComponent} from './components/core/search/search.component';
import {FootComponent} from './components/core/foot/foot.component';
import {PublishedRecruitmentComponent} from './components/published-recruitment/published-recruitment.component';

import { DetailComponent } from './components/detail/detail.component';
import { DetailEmployerComponent } from './components/detail-employer/detail-employer.component';

import { SearchPostEmployerComponent } from './components/search-post-employer/search-post-employer.component';




@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LoginComponent,
    LoginEmployersComponent,
    RegisterComponent,
    RegisterEmployersComponent,

    NavbarComponent,
    FooterComponent,
    SitebarComponent,
    MasterAdminComponent,
    DashboardComponent,


    NavComponent,
    BannerComponent,
    SearchComponent,
    FootComponent,
    PublishedRecruitmentComponent,
    DetailComponent,
    SearchPostEmployerComponent,
    DetailEmployerComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
