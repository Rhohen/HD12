import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { User } from '../../user';
import { from } from 'rxjs';
import { Task } from '../../task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 datas : any;
  public users : User[];
  public tasks : Task[];
 // public tasks : Task[];

constructor(private dataService : DataService) {
    this.dataService.getUserEvents().subscribe(
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

  ngOnInit() {
  }

}
