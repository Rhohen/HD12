import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';
import{Task} from '../../task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})

export class ListTaskComponent implements OnInit {

	filterList = ['None', 'Programmation', 'Picture','Insects', 'Java', 'Haskell', 'Cobolt', 'Ant', 'Bee', 'Beetle', 'Black', 'Red'];
	sortList = ['None', 'Difficulty', 'Duration'];

	tasks: Observable<Task[]>;
	sortedAndFilteredTasks: Observable<Task[]>;

	selectedTaskID;

	private jsonURL = 'http://localhost:3000/tasks';

	constructor(private http: HttpClient, private route : Router) {	}

	getConfig() {
		this.tasks =  this.http.get<Task[]>(this.jsonURL);
		this.sortedAndFilteredTasks = this.tasks;
	}

	ngOnInit() {
		this.getConfig();
	}

	sortChanged(sortParam: string) {
		if (sortParam == 'None') {
			this.sortedAndFilteredTasks = this.sortedAndFilteredTasks;
		} else if (sortParam == 'Difficulty') {
			this.sortedAndFilteredTasks = this.sortedAndFilteredTasks.pipe(map(items => items.sort((a,b) => { return a.taskDifficulty < b.taskDifficulty ? -1 : 1;})));
		} else if (sortParam == 'Duration') {
			this.sortedAndFilteredTasks = this.sortedAndFilteredTasks.pipe(map(items => items.sort((a,b) => { return a.taskDuration < b.taskDuration ? -1 : 1;})));
		}

	}

	filterChanged(filterParam: string) {
		if (filterParam == 'None') {
			this.sortedAndFilteredTasks = this.tasks;
		} else {
			this.sortedAndFilteredTasks = this.tasks.pipe(map(tasks => tasks.filter(task => task.competences.includes(filterParam))));
		}
	}

	onClick(i : String){
		var id = +i;
		this.sortedAndFilteredTasks.subscribe(val => {
			console.log(val[id].id);
			localStorage.setItem("IdValue", JSON.stringify(val[id].id));
			this.route.navigate(['tasks']);
		});		
	}
}
