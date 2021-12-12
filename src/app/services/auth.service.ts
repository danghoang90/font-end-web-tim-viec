import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //ham login
  checkAccount(data: any): Observable<any> {
    return this.http.post(environment.API_URL + 'login', data);
  }
  //ham create
  createCustomer(data: any): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'register', data);
  }
}
