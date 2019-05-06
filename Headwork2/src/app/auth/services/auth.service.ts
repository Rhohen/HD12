import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserModel as User, UserModel } from '../user.model';
import { AuthData } from '../auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  message: string ;
  authChange = new Subject<boolean>();

  users: Observable<UserModel[]>;
  private jsonURL = 'http://localhost:3000/users';
  role: String;
  username : String;

  constructor(private http: HttpClient, private route : Router, private snackBar: MatSnackBar) { }

  login(authData: AuthData) {

    this.users =  this.http.get<UserModel[]>(this.jsonURL);

      this.users.subscribe(val => {
        val.forEach(element=> {
          if(element.username === authData.username && element.password == authData.password) {
            this.role = element.role;
            this.username = element.username;
            console.log("user found in database with role : "+this.role);
          }
        })
        if(this.role === "user"){
          this.authSuccessful();
        } else if (this.role === "admin"){
          this.adminAuthSuccessful();
        } else if (this.role === "superadmin"){
          this.superadminAuthSuccessful();
        } else {
          this.snackBar.open("User does not exist or wrong username/password, please register or try again", "Fermer", {duration: 5000,})
        }
      });
  }

    isAuth() : boolean {
      return (this.role != null);
    }

    logout(){
        this.role = null;
        this.authChange.next(false);
        this.route.navigate(['login']);
    }

    private authSuccessful(){
        this.authChange.next(true);
        this.route.navigate(['list-tasks']);
    }

    private adminAuthSuccessful(){
      this.authChange.next(true);
      this.route.navigate(['admin']);
    }

    private superadminAuthSuccessful(){
      this.authChange.next(true);
      this.route.navigate(['admin']);
    
    }
}
