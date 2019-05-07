import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';
import{Task} from '../../task';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';

export interface DialogData {
  tasktitle: string;
  id: number;
}

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  filterList = ['None', 'Programmation', 'Picture','Insects', 'Java', 'Haskell', 'Cobolt', 'Ant', 'Bee', 'Beetle', 'Black', 'Red'];
	sortList = ['None', 'Difficulty', 'Duration'];

	tasks: Observable<Task[]>;
	sortedAndFilteredTasks: Observable<Task[]>;

  taskId: number;
  taskTitle: String;

	private jsonURL = 'http://localhost:3000/tasks';

	constructor(private http: HttpClient, private route : Router, private dialog: MatDialog) {	}

  ngOnInit() {
    this.tasks =  this.http.get<Task[]>(this.jsonURL);
		this.sortedAndFilteredTasks = this.tasks;
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

	onRemove(i : number){    
    this.sortedAndFilteredTasks.subscribe(val => {
      this.taskTitle = val[i].title;
      this.taskId = val[i].id;     
      const dialogRef = this.dialog.open(DeleteTaskDialog, {
        width: "250px",
        data: {tasktitle: this.taskTitle, id: this.taskId}
      });
    });
	}

}

@Component({
  selector: 'delete-task-dialog',
  templateUrl: 'delete-task-dialog.html',
})

export class DeleteTaskDialog {

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private route : Router,
    public dialogRef: MatDialogRef<DeleteTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick():void {
    const url = "http://localhost:3000/tasks/"+this.data.id;
    this.http.delete(url).subscribe();
    this.dialogRef.close();
    this.snackBar.open("Task successfully removed", "Close", {duration: 5000,});
    this.route.navigateByUrl('admin'); 
  }

}
