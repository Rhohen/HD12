import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';
import { Router} from '@angular/router';
import{Task} from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Observable<Task[]>;
  public task: Observable<Task>;
  public responses : String[];
  public idValue;
  private jsonURL = 'http://localhost:3000/tasks/';

constructor(private http: HttpClient, private snackBar: MatSnackBar,  private route : Router) {
}

  ngOnInit() {
    this.idValue = localStorage.getItem("IdValue");
    console.log(this.idValue);
    this.task =  this.http.get<Task>(this.jsonURL+this.idValue);
    this.task.subscribe(val => this.responses=val.reponses);
    
  }

  onSubmit() {
    this.snackBar.open("Task completed with success, you can now accomplish another one", "Close", {duration: 5000,})
    this.route.navigate(['list-tasks']);
  }

}
