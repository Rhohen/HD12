import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../user';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  username: string;
  id: number;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

// @ViewChild(MatPaginator) paginator: MatPaginator;
 users: Observable<User[]>;
 private jsonURL = 'http://localhost:3000/users';
 userId: number;
 username: String;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.users = this.http.get<User[]>(this.jsonURL).pipe(map(users => users.filter(user => user.role === "user")));
  }

  deleteUser(id: number) {
    this.users.subscribe(val => {
      this.username = val[id].username;
      this.userId = val[id].id
      const dialogRef = this.dialog.open(DeleteUserDialog, {
        width: "250px",
        data: {username: this.username, id: this.userId}
      });
    });
  }
}

@Component({
  selector: 'delete-user-dialog',
  templateUrl: 'delete-user-dialog.html',
})

export class DeleteUserDialog {

  private jsonURL = 'http://localhost:3000/users/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private route : Router,
    public dialogRef: MatDialogRef<DeleteUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick():void {
    const url = "http://localhost:3000/users/"+this.data.id;
    this.http.delete(url).subscribe();
    this.dialogRef.close();
    this.snackBar.open("User successfully deleted", "Fermer", {duration: 5000,});
    this.route.navigateByUrl('admin', {skipLocationChange: true}).then(()=>this.route.navigate(['list-user'])); 
  }

}
