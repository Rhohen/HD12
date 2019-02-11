import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private route: Router, private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        //verifier si le role est egale a user???

        if(this.auth.isAuth() && this.auth.testUser.role==='user'){
            localStorage.getItem('currentUser')
             return true;
         }else{
             this.route.navigate(['login']);
             return false;
         };
    }  
        

   
}