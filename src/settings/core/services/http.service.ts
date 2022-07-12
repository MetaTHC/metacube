import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get apiUrl(): string {
    return environment.apiUrl;
  }

  constructor(private http: HttpClient) { }

  get({endpoint, options}: { endpoint: string, options?: any }): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, options);
  }
  post({endpoint, data, options}: { endpoint: string, data: any, options?: any }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
  }
  put({endpoint, data, options}: { endpoint: string, data: any, options?: any }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, options);
  }
  delete({endpoint, options}: { endpoint: string, options?: any }): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`, options);
  }
}
