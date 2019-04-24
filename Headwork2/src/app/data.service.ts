import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {API_URLS, TASKS_URLS, REGISTER_URLS, FINDUSER_URLS, DELETE_URLS, USERS_URLS} from './config/api.url.config';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUser(name: string): Observable<any> {
    return this.http.get(USERS_URLS.USER_CON_URL + name);
  }
  getUserEvents(): Observable<any> {
    return this.http.get(API_URLS.USER_URL);
  }

  getTaskEvents(): Observable<any> {
    return this.http.get(TASKS_URLS.TASK_URL);
  }

  postRegisterEvents(users: User): Observable<any> {
    return this.http.post(REGISTER_URLS.REGISTER_URL, users);
  }

  findUserById(Id: string): Observable<any> {
    return this.http.get(FINDUSER_URLS.FINDUSER_URL + Id);
  }

  DeleteUser(Id: string) {
    return this.http.delete(DELETE_URLS.DELETE_URL + Id);
  }


}
