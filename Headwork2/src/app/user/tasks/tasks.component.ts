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
  public task:Task;
  public idValue;
  private jsonURL = 'assets/listTasks.json';

constructor(private http: HttpClient) {
}

  ngOnInit() {
    this.idValue = localStorage.getItem("IdValue");
    console.log(this.idValue);
    this.tasks =  this.http.get<Task[]>(this.jsonURL);
    this.tasks.subscribe(data => this.task = data[this.idValue]);
  }

}
