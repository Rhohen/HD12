import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

export type Task = { idTask:string,
		label: string,
		description: string,
		category: string,
		taskDifficulty:number,
		taskDuration:number };

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})

export class ListTaskComponent implements OnInit {

	filterList = ['None', 'Botanique', 'Programmation', 'Texte'];
	sortList = ['None', 'Difficulty', 'Duration'];

	tasks: Observable<Task[]>;
	sortedAndFilteredTasks: Observable<Task[]>;

	private jsonURL = 'assets/listTasks.json';

	constructor(private http: HttpClient) {	}

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
			this.sortedAndFilteredTasks = this.tasks.pipe(map(tasks => tasks.filter(task => task.category === filterParam.toLowerCase())));
		}
	}
}
