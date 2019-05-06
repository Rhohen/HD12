import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import{Task} from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Observable<Task[]>;
  public task: Observable<Task>;
  public idValue;
  private jsonURL = 'http://localhost:3000/tasks/';

constructor(private http: HttpClient) {
}

  ngOnInit() {
    this.idValue = localStorage.getItem("IdValue");
    console.log(this.idValue);
    this.task =  this.http.get<Task>(this.jsonURL+this.idValue);
    this.task.subscribe(val => console.log(val));
    
  }

}
