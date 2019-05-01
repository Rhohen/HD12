import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../user.model';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthData} from '../auth-data.model';
export interface UserLog {
  id: number;
  name: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel;
 loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  testUser = {id: '1', username: 'user', password: 'user', role: 'user'};
  testSuperAdmin = {id: '2', username: 'superadmin', password: 'superadmin', role: 'superadmin'};
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private http: HttpClient) {}
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reinitialise le status
        this.authService.logout();

        // retourne a l'url pris en parametre ou a la home page
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    }

    // acceder facilement au different champs du formulaire
    get f() {
    //  console.log(this.loginForm.value);
      return this.loginForm.controls;

    }

    onSubmit() {
        this.submitted = true;

        // stop si le formulaire est inavlid
        if (this.loginForm.invalid) {
            return;
        }
      console.log('je recupere les données du formulaires ' + this.f.username.value);
        this.loading = true;
      console.log('envoir des donnees du component de login');
      console.log(this.f.username.value, this.f.password.value);
        this.login({
            username: this.f.username.value,
            password: this.f.password.value }
            ) ;
    }
  login(authData: AuthData) {

    // construit un user avec les données venant du formulaire
    this.user = {
      username: authData.username,
      password: authData.password,
      role: ' '
    };
    console.log('recuperation des donnees du component de login dans le service');
    console.log(this.user);
    if (this.user.username === this.testUser.username &&
      this.user.password === this.testUser.password) {
      this.user.role = this.testUser.role;

      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['tasks']);
    } else if (this.user.username === this.testSuperAdmin.username &&
      this.user.password === this.testSuperAdmin.password) {
      this.user.role = this.testSuperAdmin.role;
      console.log(this.user.username , this.user.role + 'test de admin');
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['login']);
    }
    console.log('le user final');
    console.log(this.user);
    return this.user;
  }
}
