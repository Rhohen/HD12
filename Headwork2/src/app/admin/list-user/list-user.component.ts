import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatDialog} from '@angular/material';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../user';
import { DataSource } from '@angular/cdk/table';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

// @ViewChild(MatPaginator) paginator: MatPaginator;
 displayedColumns: string[] = ['username', 'role', 'action'];
 userModel: User[];
 user: User;
 id: string;
 dataSource: any;


  constructor(private service: DataService, private dialog: MatDialog, private route: Router) { }

  ngOnInit() {
  // this.dataSource.paginator = this.paginator;

  this.service.getUserEvents().subscribe(
    data => {
      this.userModel = data;
      this.dataSource = new MatTableDataSource(this.userModel);
    }
  );


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: string): void {

    console.log(id);
    this.service.findUserById(id).subscribe(
      data => {
        this.user = data[0];
        const dialogRef = this.dialog.open(UserDetailComponent, {
          width: '70%',
          data: { name: this.user.name, role: this.user.role }
        });
      });

  }

  deleteUser(id: String) {

 // let ID = parseInt(id);

  console.log('jappelle la fonction delete');
    this.service.DeleteUser(id);
      console.log('fonction bien appelé');
    this.userModel = this.userModel.filter( el => el.id !== id);
    this.dataSource = new MatTableDataSource(this.userModel);
  }
}
