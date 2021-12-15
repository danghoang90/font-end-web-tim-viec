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
import { FooterComponent } from './admin/layout/core/footer/footer.component';
import { SitebarComponent } from './admin/layout/core/sitebar/sitebar.component';
import { MasterAdminComponent } from './admin/layout/master-admin/master-admin.component';
import { DashboardComponent } from './admin/layout/core/dashboard/dashboard.component';
import { ListCustomerComponent } from './admin/components/customer/list-customers/list-customer.component';
import { EditCustomerComponent } from './admin/components/customer/edit-customer/edit-customer.component';
import { ListEmployersComponent } from './admin/components/employer/list-employers/list-employers.component';
import { EditEmployerComponent } from './admin/components/employer/edit-employer/edit-employer.component';

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
    DashboardComponent
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
