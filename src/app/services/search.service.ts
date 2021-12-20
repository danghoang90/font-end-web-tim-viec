import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  listJobSearch: Array<any> | undefined = [];
  listEmployerSearch: Array<any> | undefined = [];


  constructor(private httpClient: HttpClient) {
  }

  getAllCity(): Observable<any>{
    return this.httpClient.get(environment.API_URL + 'search/city');
  }
  getAllJob(): Observable<any>{
    return this.httpClient.get(environment.API_URL + 'search/job');
  }
  searchPosts(data:any): Observable<any>{
    return this.httpClient.post(environment.API_URL +'search/post',data);
  }
  searchEmployers(data: any): Observable<any>{
    return this.httpClient.post(environment.API_URL + 'search/employer',data)
  }

}
