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

import {RegisterEmployersComponent} from './pages/register-employers/register-employers.component';

import {NavComponent} from './components/core/nav/nav.component';
import {BannerComponent} from './components/core/banner/banner.component';
import {SearchComponent} from './components/core/search/search.component';
import {FooterComponent} from './components/core/footer/footer.component';
import {PublishedRecruitmentComponent} from './components/published-recruitment/published-recruitment.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LoginComponent,
    LoginEmployersComponent,
    RegisterComponent,
    RegisterEmployersComponent,

    NavComponent,
    BannerComponent,
    SearchComponent,
    FooterComponent,
    PublishedRecruitmentComponent

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
