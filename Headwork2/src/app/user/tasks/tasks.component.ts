import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {User} from '../../user';
import{Task} from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  datas: any;
  public users: User[];
  public tasks: Task[];

constructor(private dataService: DataService) {
    this.dataService.getUserEvents().subscribe(
     data => {
       this.users = data;
      }
    );
    this.dataService.getTaskEvents().subscribe(
     data => {
       this.tasks = data;
     }
    );


   }

  ngOnInit() {
  }

}
