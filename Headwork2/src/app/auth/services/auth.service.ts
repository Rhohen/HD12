import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserModel as User } from '../user.model';
import { AuthData } from '../auth-data.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   message: string ;
  testUser = {id: '1', username: 'user', password: 'user', role: 'user'};
  testSuperAdmin = {id: '2', username: 'superadmin', password: 'superadmin', role: 'superadmin'};

  authChange = new Subject<boolean>();

  constructor(private route : Router) { }

  private user: User ;

    registerUser(authData : AuthData) {
        this.user = {
            username: authData.username,
            password: authData.password,
            role : 'user'
        };
    //inserer la fonction de l'insertion dans la BD

        this.authSuccessful();
    }

    login(authData: AuthData) {

      //construit un user avec les données venant du formulaire
        this.user = {
            username: authData.username,
            password: authData.password,
            role : ' '
        };

        //si le user est simple user
        if(this.user.username===this.testUser.username &&
            this.user.password === this.testUser.password){
              this.user.role = 'user';
            localStorage.setItem('currentUser',  JSON.stringify(this.user));
            //console.log(localStorage);
            console.log('super user est auth');
            this.message = "successfull";
            this.authSuccessful();

            //sinon s'il est admin
        }else if(this.user.username===this.testSuperAdmin.username &&
          this.user.password === this.testSuperAdmin.password) {
            this.user.role = 'superadmin';
            console.log('super admin est auth');
             this.message = "username ou password incorrect";
             //this.route.navigate(['admin']);
             this.superAdminauthSuccessful();
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
        return this.user != null && this.user.role==='superadmin'
    }

   private authSuccessful(){
        this.authChange.next(true);
        this.route.navigate(['list-tasks']);
    }
    private superAdminauthSuccessful(){
      this.authChange.next(true);
      this.route.navigate(['admin']);
  }



}
