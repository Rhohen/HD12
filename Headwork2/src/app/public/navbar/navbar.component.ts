import { Component, OnInit,OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { User} from '../../user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserModel } from 'src/app/admin/UserModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  public user_name: any;
  isAuth = false;
  authSubscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
    }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe( authStatus => {
    this.isAuth = authStatus;
    this.user_name = this.authService.testUser;
    console.log(this.user_name.username);
    console.log(this.isAuth);
    });

  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
