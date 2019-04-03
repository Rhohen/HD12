import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { User } from '../../user';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

//@ViewChild(MatPaginator) paginator: MatPaginator;
 displayedColumns: string[] = ['username', 'role', 'action'];
 userModel: User[];
 dataSource: any;


  constructor(private service: DataService) { }

  ngOnInit() {
  //this.dataSource.paginator = this.paginator;
  this.service.getUserEvents().subscribe(
    data => {
      this.userModel = data;
      this.dataSource = new MatTableDataSource(this.userModel);
      console.log(this.userModel);
      console.log(this.dataSource);
    }
  );


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
