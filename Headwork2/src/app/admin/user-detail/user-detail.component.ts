import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../user';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit() {}

  onDialogClose(){

  }

}
