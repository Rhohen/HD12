import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {}

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
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop si le formulaire est inavlid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login({
            username: this.f.username.value, 
            password: this.f.password.value}) ;

            //console.log(this.f.username.value,this.f.password.value);
    }

}
