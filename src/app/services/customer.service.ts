import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private httpClient: HttpClient) { }

  getAllCustomer(): Observable<any>{
    return this.httpClient.get(environment.API_URL + 'customers/list');
  }
  getByIdCustomer(id: number): Observable<any>{
    return this.httpClient.get(environment.API_URL+ 'customers/update/' + id);
  }
  editCustomer(id: number, data: any): Observable<any>{
    return this.httpClient.post(environment.API_URL + 'customers/edit/' + id, data);
  }
  destroyCustomer(id: number): Observable<any>{
    return this.httpClient.get(environment.API_URL + 'customers/delete/' + id);
  }

}
