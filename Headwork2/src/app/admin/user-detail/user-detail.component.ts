import { Component, OnInit } from '@angular/core';

import { User } from '../../user';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: any;
  constructor(private adminService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.adminService.findUserById(this.id).subscribe(
      data => {
        this.user = data[0];
        console.log(this.user);
      }
    )

  }

}
