import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthData } from '../auth-data.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   message: string ;
  testUser = {id:'1', username:'user', password:'user', role:'user'};

  authChange = new Subject<boolean>();

  constructor(private route : Router) { }

  private user: User ;

    registerUser(authData : AuthData){
        this.user = {
            username: authData.username,
            password: authData.password,
            role : 'user'
        };
    //inserer la fonction de l'insertion dans la BD

        this.authSuccessful();
    }

    login(authData: AuthData){
        this.user = {
            username: authData.username,
            password: authData.password,
            role : 'user'
        };

        if(this.user.username===this.testUser.username && 
            this.user.password === this.testUser.password){
            localStorage.setItem('currentUser',  JSON.stringify(this.user));
            //console.log(localStorage);
            this.message = "successfull";
            this.authSuccessful();
        }else{
             this.message = "username ou password incorrect";
        }
        return this.user
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
        this.route.navigate(['login']);
    }

    getUser(){
        return {... this.user};
    }

    isAuth(){
        return this.user != null ;
    }

    isAdmin(){
        //verifie si le user est admin
    }

   private authSuccessful(){
        this.authChange.next(true);
        this.route.navigate(['tasks']);
    }



}
