import { Component } from '@angular/core';
import { DataService} from './data.service';
import { from } from 'rxjs';
import { User } from './user';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Headwork2';

constructor() {
  
   }

}
