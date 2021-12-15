import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployer(): Observable<any>{
    return this.httpClient.get(environment.API_URL + 'list-employer');
  }
  getByIdEmployer(id:number): Observable<any>{
    return this.httpClient.get(environment.API_URL+'/' + id);
  }
  editEmployer(id:number, data:any): Observable<any>{
    return this.httpClient.post(environment.API_URL ,data);
  }
}
