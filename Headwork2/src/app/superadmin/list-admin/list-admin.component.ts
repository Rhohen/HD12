import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../user';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  username: string;
  id: number;
  action: string;
}

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  users: Observable<User[]>;
  sortedUsers: Observable<User[]>;
  private jsonURL = 'http://localhost:3000/users';
  userId: number;
  username: String;
  sortList = ['None', 'Username', 'Role'];
  filterList = ['None', 'Admin', 'User'];

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.users = this.http.get<User[]>(this.jsonURL).pipe(map(users => users.filter(user => user.role === "user" || user.role === "admin")));
    this.sortedUsers = this.users;
  }

  sortChanged(sortParam: string) {
		if (sortParam == 'None') {
			this.sortedUsers = this.sortedUsers;
		} else if (sortParam == 'Username') {
			this.sortedUsers = this.sortedUsers.pipe(map(items => items.sort((a,b) => { return a.username < b.username ? -1 : 1;})));
		} else if (sortParam == 'Role') {
			this.sortedUsers = this.sortedUsers.pipe(map(items => items.sort((a,b) => { return a.role < b.role ? -1 : 1;})));
		}

  }
  
  filterChanged(filterParam: string) {
		if (filterParam == 'None') {
			this.sortedUsers = this.users;
		} else {
			this.sortedUsers = this.users.pipe(map(tasks => tasks.filter(task => task.role===filterParam.toLocaleLowerCase())));
		}
	}

  deleteUser(id: number) {
    this.users.subscribe(val => {
      this.username = val[id].username;
      this.userId = val[id].id      
      const dialogRef = this.dialog.open(UpdateUserDialog, {
        width: "250px",
        data: {username: this.username, id: this.userId, action: "delete"}
      });
    });
  }

  upgradeUser(id: number) {
    this.users.subscribe(val => {
      this.username = val[id].username;
      this.userId = val[id].id      
      const dialogRef = this.dialog.open(UpdateUserDialog, {
        width: "250px",
        data: {username: this.username, id: this.userId, action: "upgrade"}
      });
    });
  }

  demoteUser(id: number) {
    this.users.subscribe(val => {
      this.username = val[id].username;
      this.userId = val[id].id      
      const dialogRef = this.dialog.open(UpdateUserDialog, {
        width: "250px",
        data: {username: this.username, id: this.userId, action: "demote"}
      });
    });
  }

}

@Component({
  selector: 'update-user-dialog',
  templateUrl: 'update-user-dialog.html',
})

export class UpdateUserDialog {

  private jsonURL = 'http://localhost:3000/users/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private route : Router,
    public dialogRef: MatDialogRef<UpdateUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick():void {
    const url = "http://localhost:3000/users/"+this.data.id;
    this.http.delete(url).subscribe();
    this.dialogRef.close();
    this.snackBar.open("User successfully updated", "Close", {duration: 5000,});
    this.route.navigateByUrl('superadmin', {skipLocationChange: true}).then(()=>this.route.navigate(['list-admin'])); 
  }

}
