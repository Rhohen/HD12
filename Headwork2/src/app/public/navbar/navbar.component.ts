import { Component, OnInit,OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { User} from '../../user';
import { AuthService } from '../../auth/services/auth.service';
import { UserModel } from 'src/app/admin/UserModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  isAuth:boolean;
  isAdmin:boolean;
  isSuperadmin:boolean;
  authSubscription: Subscription;
  username;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
    }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe( authStatus => {
      this.isAuth = authStatus;
      this.username = this.authService.username;
      console.log("user : "+this.username);
      console.log("auth : "+ this.isAuth);
      if(this.authService.role==='admin'){
        this.isAdmin=true;
        this.isSuperadmin=false;
      }
      if(this.authService.role==='superadmin'){
        this.isAdmin=true;
        this.isSuperadmin=true;
      }
  });

  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.isAdmin=false;
    this.isSuperadmin=false;
  }

}
