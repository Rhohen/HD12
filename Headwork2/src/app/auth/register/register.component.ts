import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public users: User[];
  selectUsers: User;

  constructor(private dataService: DataService, private httpClient: HttpClient, private snackBar: MatSnackBar,  private route : Router) { }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault();
    const target = event.target;
    const name =  target.querySelector('#name').value;
   // const email =  target.querySelector('#email').value
    const passwd =  target.querySelector('#passwd').value;
    const passwd2 =  target.querySelector('#passwd2').value;

    // verification de mot de pass

    if(passwd === passwd2) {
      let user = new User(Math.random(), name, passwd, 'user');

    // appel de la methode postRegisterEvents pour enregistrer les users
      /*this.dataService.postRegisterEvents(users).subscribe(
        res => {
          this.iniRegister();
        }
      );*/

      this.httpClient.post('http://localhost:3000/users', user).subscribe((res:Response)=>{
        this.snackBar.open("Register succeed, please connect now", "Fermer", {duration: 5000,})
        console.log(res);
        this.route.navigate(['login']);
      });

    }
  }
  iniRegister() {
    this.selectUsers = new User();
  }

}
