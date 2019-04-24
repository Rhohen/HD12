import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {UserModel} from '../user.model';
import { User } from '../../user';
import {AuthData} from '../auth-data.model';
import {DataService} from 'src/app/data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: UserModel;
  users: User[];
  dataUser: any;
  message: string;
//  testUser = {id: '1', username: 'user', password: 'user', role: 'user'};
//  testSuperAdmin = {id: '2', username: 'superadmin', password: 'superadmin', role: 'superadmin'};

  authChange = new Subject<boolean>();

  constructor(private route: Router, private conService: DataService) {
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

  login(authData: AuthData) {

    // construit un user avec les données venant du formulaire
    this.user = {
      username: authData.username,
      password: authData.password,
      role: ' '
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
    } );
    return this.user;
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.route.navigate(['login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }
  isAdmin() {
    // verifie si le user est admin
    return this.user != null && this.user.role === 'superadmin';
  }

  private authSuccessful() {
    this.authChange.next(true);
    this.route.navigate(['tasks']);
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
