import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {UserModel} from '../user.model';
import { User } from '../../user';
import {AuthData} from '../auth-data.model';
import {DataService} from 'src/app/data.service';
import {HttpClient} from '@angular/common/http';
import {UserLog} from '../login/login.component';

export interface UserLog {
  id: number;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  client: UserLog;
  user: UserModel;
  users: User[];
  userlog: Observable<UserLog[]>;
  dataUser: any;
  message: string;
<<<<<<< HEAD
=======
  user_logURL = '../../assets/users.json';
>>>>>>> b96fbbe49b7e2a2e107292424d791264fc6eab92
  testUser = {id: '1', username: 'user', password: 'user', role: 'user'};
  testSuperAdmin = {id: '2', username: 'superadmin', password: 'superadmin', role: 'superadmin'};

  authChange = new Subject<boolean>();

  constructor(private route: Router, private conService: DataService, private http: HttpClient) {
  }

  registerUser(authData: AuthData) {
    this.user = {
      username: authData.username,
      password: authData.password,
      role: 'user'
    };
    // inserer la fonction de l'insertion dans la BD

    this.authSuccessful();
  }
<<<<<<< HEAD

  login(authData: AuthData) {

    // construit un user avec les données venant du formulaire
    /*this.user = {
      username: authData.username,
      password: authData.password,
      role: 'userS'
    };

    this.conService.getUser(authData.username).subscribe(
      data => {
        this.users = data;
        console.log(this.users[0]);
        console.log(this.user);
        if (this.user.username === this.users[0].name &&
          this.user.password === this.users[0].hashed_password) {
          this.user.role = this.users[0].role;
          console.log('le nom du user: ' + this.users[0].name);
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          // console.log(localStorage);
          if (this.user.role === 'superadmin') {
            this.superAdminauthSuccessful();
          } else if (this.user.role === 'admin') {
            this.adminSuccessful();
          } else if (this.user.role === 'user') {
            this.authSuccessful();
          }
          console.log(this.users[0].name + ' est auth');
          this.message = 'successfull';
      }
    } );*/
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

=======
>>>>>>> b96fbbe49b7e2a2e107292424d791264fc6eab92
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.route.navigate(['login']);
  }

  getUser() {
    return {...this.testUser};
  }

  isAuth() {
    return this.testUser != null;
  }
  isAdmin() {
    // verifie si le user est admin
    console.log(this.users + 'dans la fonction is admin');
    return this.user != null && this.user.role === 'superadmin';
  }

  private authSuccessful() {
    this.authChange.next(true);
    this.route.navigate(['list-tasks']);
  }
  private adminSuccessful() {
    this.authChange.next(true);
    this.route.navigate(['admin']);
  }
  private superAdminauthSuccessful() {
    this.authChange.next(true);
    this.route.navigate(['admin']);
  }

}
