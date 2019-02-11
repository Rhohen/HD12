import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URLS, TASKS_URLS, REGISTER_URLS} from './config/api.url.config';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getEvents(): Observable<any>{
    return this.http.get(API_URLS.USER_URL);
  }

  getTaskEvents(): Observable<any>{
    return this.http.get(TASKS_URLS.TASK_URL);
  }

  postRegisterEvents(users: User):Observable<any>{
    return this.http.post(REGISTER_URLS.REGISTER_URL, users);
  }

  
}
