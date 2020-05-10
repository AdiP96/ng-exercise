import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  // this is used to get the user list from a specific page
  getUsersList(pageNumber: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${pageNumber}`);
  }

  // this is used to get the user details for a given user id
  getUserDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
