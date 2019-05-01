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
  user_logURL = '../../assets/users.json';
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
