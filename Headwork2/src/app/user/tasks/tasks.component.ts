import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {User} from '../../user';
import{Task2} from './create-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
/*
  datas : any;
  public users : User[];
  public tasks : Task[];
 // public tasks : Task[];

    this.dataService.getEvents().subscribe(
     data => {
       this.users = data
      }
    ); 
    this.dataService.getTaskEvents().subscribe(
     data => {
       this.tasks = data 
     }
    ); 
    

   }
*/
  ngOnInit() {
  }

}
